import { useState, useRef, useEffect } from 'react';
import { Stack } from '../dsa/Stack';
import { Queue } from '../dsa/Queue';
import { products } from '../data/products';

// Initialize DSA structures outside component to persist across re-renders if needed, 
// but here we want them per-session. Storing in ref inside hook is better.

export const useCart = () => {
    // ---------------- DSA: HashMap (Object) ----------------
    // We use a Javascript Object (Map) to store cart items.
    // Key: Product ID, Value: Cart Item Object
    // Benefit: O(1) Access for updates/removals.
    const [cart, setCart] = useState({});

    // ---------------- DSA: Stack (LIFO) ----------------
    // Used for UNDO functionality.
    // Stores snapshots of the cart state.
    const undoStack = useRef(new Stack());

    // ---------------- DSA: Queue (FIFO) ----------------
    // Used for Order History.
    // Stores completed orders.
    const orderQueue = useRef(new Queue());
    const [history, setHistory] = useState([]); // State to trigger re-renders for history UI

    // Load initial state (simulating persistence logic or fresh start)
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) setCart(JSON.parse(savedCart));

        const savedHistory = localStorage.getItem('orderHistory');
        if (savedHistory) {
            const parsed = JSON.parse(savedHistory);
            parsed.forEach(order => orderQueue.current.enqueue(order));
            setHistory(parsed);
        }
    }, []);

    // Save to LocalStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Helper: Push current state to Stack before mutation
    const saveStateForUndo = () => {
        // Deep copy the current cart state
        undoStack.current.push(JSON.parse(JSON.stringify(cart)));
    };

    // --- Action: Add to Cart ---
    // Time Complexity: O(1) due to Hash Map lookup
    const addToCart = (product) => {
        saveStateForUndo();
        setCart(prev => {
            const newCart = { ...prev };
            if (newCart[product.id]) {
                // Creates a new object reference to avoid mutating 'prev' content
                newCart[product.id] = {
                    ...newCart[product.id],
                    quantity: newCart[product.id].quantity + 1
                };
            } else {
                newCart[product.id] = { ...product, quantity: 1 };
            }
            return newCart;
        });
    };

    // --- Action: Remove from Cart ---
    // Time Complexity: O(1)
    const removeFromCart = (productId) => {
        saveStateForUndo();
        setCart(prev => {
            const newCart = { ...prev };
            delete newCart[productId];
            return newCart;
        });
    };

    // --- Action: Update Quantity ---
    // Time Complexity: O(1)
    const updateQuantity = (productId, delta) => {
        saveStateForUndo();
        setCart(prev => {
            const newCart = { ...prev };
            if (newCart[productId]) {
                const newQty = newCart[productId].quantity + delta;
                if (newQty > 0) {
                    // Create new object reference
                    newCart[productId] = {
                        ...newCart[productId],
                        quantity: newQty
                    };
                } else {
                    delete newCart[productId]; // Remove if qty goes to 0
                }
            }
            return newCart;
        });
    };

    // --- DSA: Stack Operation (Undo) ---
    // Time Complexity: O(1)
    const undo = () => {
        if (!undoStack.current.isEmpty()) {
            const previousState = undoStack.current.pop();
            setCart(previousState);
        }
    };

    // --- DSA: Queue Operation (Checkout) ---
    // Time Complexity: Enqueue O(1)
    const checkout = () => {
        if (Object.keys(cart).length === 0) return;

        const order = {
            id: Date.now(),
            items: { ...cart },
            total: calculateTotal(),
            date: new Date().toLocaleString()
        };

        // Add to Queue (History)
        orderQueue.current.enqueue(order);

        // Update local state for UI and persistence
        const newHistory = orderQueue.current.getAll();
        setHistory(newHistory);
        localStorage.setItem('orderHistory', JSON.stringify(newHistory));

        // Clear Cart
        setCart({});
        undoStack.current.clear(); // Clear undo history after checkout
    };

    const clearHistory = () => {
        // Clear via Dequeueing all items (just for demo, or reset ref)
        while (!orderQueue.current.isEmpty()) {
            orderQueue.current.dequeue();
        }
        setHistory([]);
        localStorage.removeItem('orderHistory');
    }

    const calculateTotal = () => {
        return Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    };

    const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        undo,
        checkout,
        history,
        clearHistory,
        calculateTotal,
        cartCount,
        canUndo: !undoStack.current.isEmpty()
    };
};
