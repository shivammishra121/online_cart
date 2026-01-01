import { useState, useEffect } from 'react';
import { useCart } from './hooks/useCart';
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { OrderHistory } from './components/OrderHistory';
import { About } from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const {
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
    canUndo
  } = useCart();

  // Simple Router for /about page
  if (currentPath === '/about') {
    return <About />;
  }

  const handleCheckout = () => {
    checkout();
    setActiveTab('history');
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        {activeTab === 'products' && (
          <ProductList addToCart={addToCart} />
        )}

        {activeTab === 'cart' && (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            undo={undo}
            checkout={handleCheckout}
            total={calculateTotal()}
            canUndo={canUndo}
          />
        )}

        {activeTab === 'history' && (
          <OrderHistory
            history={history}
            clearHistory={clearHistory}
          />
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '2rem', background: 'white' }}>
        <p>DSA Shopping Cart Project &copy; 2025</p>
        <p style={{ fontSize: '0.875rem' }}>Built with React, Stack, Queue, HashMap, and Merge Sort</p>
      </footer>
    </div>
  );
}

export default App;
