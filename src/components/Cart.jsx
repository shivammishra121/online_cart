import React from 'react';

export const Cart = ({ cart, updateQuantity, removeFromCart, undo, checkout, total, canUndo }) => {
    // Convert HashMap (Object) to Array for rendering
    // Object.values is O(n) where n is number of unique items
    const cartItems = Object.values(cart);

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="card animate-fade-in" style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Your Cart is Empty</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Looks like you haven't added anything yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 0' }}>
            <div className="page-header">
                <h2 className="page-title">Shopping Cart</h2>
                <button
                    onClick={undo}
                    className="btn btn-secondary"
                    disabled={!canUndo}
                    style={{ opacity: canUndo ? 1 : 0.6, cursor: canUndo ? 'pointer' : 'not-allowed', fontSize: '0.9rem' }}
                >
                    ↩ Undo Last Action
                </button>
            </div>

            <div className="cart-layout">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cartItems.map((item) => (
                        <div key={item.id} className="card cart-item">
                            <img src={item.image} alt={item.name} style={styles.image} />
                            <div style={{ flex: 1 }}>
                                <h3 style={styles.itemName}>{item.name}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>₹{item.price.toLocaleString('en-IN')}</p>
                            </div>

                            <div style={styles.controls}>
                                <button
                                    style={styles.qtyBtn}
                                    onClick={() => updateQuantity(item.id, -1)}
                                >-</button>
                                <span style={{ fontWeight: '600', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                <button
                                    style={styles.qtyBtn}
                                    onClick={() => updateQuantity(item.id, 1)}
                                >+</button>
                            </div>

                            <div style={{ fontWeight: '700', minWidth: '80px', textAlign: 'right' }}>
                                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={styles.removeBtn}
                                aria-label="Remove item"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ height: 'fit-content' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Order Summary</h3>

                    <div style={styles.summaryRow}>
                        <span>Subtotal</span>
                        <span>₹{Number(total).toLocaleString('en-IN')}</span>
                    </div>
                    <div style={styles.summaryRow}>
                        <span>Tax (Estimated)</span>
                        <span>₹0.00</span>
                    </div>
                    <div style={{ ...styles.summaryRow, fontSize: '1.25rem', fontWeight: '700', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem' }}>
                        <span>Total</span>
                        <span>₹{Number(total).toLocaleString('en-IN')}</span>
                    </div>

                    <button
                        className="btn btn-primary"
                        style={{ width: '100%', marginTop: '2rem', padding: '1rem' }}
                        onClick={checkout}
                    >
                        Checkout Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.5rem'
    },
    image: {
        width: '80px',
        height: '80px',
        borderRadius: 'var(--radius-sm)',
        objectFit: 'cover'
    },
    itemName: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '0.25rem'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'var(--bg-color)',
        padding: '0.25rem',
        borderRadius: 'var(--radius-sm)'
    },
    qtyBtn: {
        width: '28px',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        background: 'white',
        fontSize: '1rem',
        color: 'var(--text-primary)'
    },
    removeBtn: {
        background: 'none',
        border: 'none',
        color: 'var(--text-secondary)',
        fontSize: '1.5rem',
        marginLeft: '1rem',
        padding: '0.5rem' // larger touch target
    },
    summaryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
        color: 'var(--text-secondary)'
    }
};
