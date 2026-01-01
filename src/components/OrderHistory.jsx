import React from 'react';

export const OrderHistory = ({ history, clearHistory }) => {
    // ---------------- DSA: Queue (FIFO) Visualization ----------------
    // The history array represents our Queue. 
    // Newest orders are added to the end (Enqueue).
    // In a real processing queue, we'd process from index 0 (Dequeue).

    // For visualization, we might want to reverse it to show newest first,
    // but to demonstrate queue behavior, we list them in order.

    if (!history || history.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="card animate-fade-in" style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '1rem' }}>No Order History</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>You haven't completed any orders yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 0' }}>
            <div className="page-header">
                <div>
                    <h2 className="page-title">Order History</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Queue Visualization (FIFO)</p>
                </div>
                <button onClick={clearHistory} className="btn btn-danger" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                    Clear History
                </button>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {history.map((order, index) => (
                    <div key={order.id} className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                    <span className="badge" style={{ background: 'var(--primary-color)', color: 'white', border: 'none' }}>#{order.id}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{order.date}</span>
                                </div>
                            </div>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                                Queue Pos: <span style={{ color: 'var(--primary-color)' }}>{index + 1}</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {Object.values(order.items).map(item => (
                                    <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.375rem 0', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                        <span><span style={{ fontWeight: '600', color: 'var(--text-secondary)', marginRight: '8px' }}>{item.quantity}x</span> {item.name}</span>
                                        <span style={{ fontWeight: '500' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Amount</span>
                            <span style={{ fontWeight: '700', fontSize: '1.25rem', color: 'var(--text-primary)' }}>₹{Number(order.total).toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
