/**
 * Product Data (Array)
 * 
 * This represents the "Database" of products.
 * We use an Array to store the collection of products.
 * Arrays allow for O(1) access by index, but O(n) search by value (unless sorted).
 */
export const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 4999.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        name: "Premium Backpack",
        price: 1599.00,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 8499.00,
        category: "Electronics",
        // Updated to White/Black Mechanical Keyboard (Unsplash ID: b20J7YbTK8w / similar)
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        name: "Running Shoes",
        price: 3200.00,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        name: "Coffee Maker",
        price: 4500.00,
        category: "Home",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60"
    }
];
