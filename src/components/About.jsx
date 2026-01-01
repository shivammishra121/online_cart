import React from 'react';

export const About = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <div className="page-header">
                <div>
                    <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Project Internals</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        DSA Implementation Details & Feature Breakdown
                    </p>
                </div>
                <a href="/" className="btn btn-secondary">← Back to App</a>
            </div>

            <section className="card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    Data Structures & Algorithms Used
                </h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                            1. Merge Sort (Algorithm)
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            <strong>Usage:</strong> Sorting the Product List by Price.<br />
                            <strong>Implementation:</strong> A recursive Divide & Conquer algorithm implemented in <code>src/dsa/Sorting.js</code>.<br />
                            <strong>Complexity:</strong> Time: O(n log n) | Space: O(n).<br />
                            <strong>Why:</strong> Unlike Bubble Sort (O(n²)), Merge Sort is efficient for larger datasets and guarantees consistent performance.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                            2. Hash Map (Data Structure)
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            <strong>Usage:</strong> Managing the Shopping Cart Items.<br />
                            <strong>Implementation:</strong> JavaScript Object <code>{'{ productId: Item }'}</code> in <code>useCart.js</code>.<br />
                            <strong>Complexity:</strong> Access/Insert/Delete: O(1).<br />
                            <strong>Why:</strong> Allows instant retrieval of cart items to update quantity or remove them, without searching through an array (O(n)).
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                            3. Stack (Data Structure)
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            <strong>Usage:</strong> Undo "Last Action" Feature.<br />
                            <strong>Implementation:</strong> LIFO (Last-In, First-Out) class in <code>src/dsa/Stack.js</code>.<br />
                            <strong>Why:</strong> Perfect for tracking state history. When you add/remove an item, the previous state is PUSHed. Clicking Undo POPs the state back.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                            4. Queue (Data Structure)
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            <strong>Usage:</strong> Order History Processing.<br />
                            <strong>Implementation:</strong> FIFO (First-In, First-Out) class in <code>src/dsa/Queue.js</code>.<br />
                            <strong>Why:</strong> Simulates a real-world order processing system where orders are processed in the sequence they are received.
                        </p>
                    </div>
                </div>
            </section>

            <section className="card">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    Project Features
                </h2>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <li><strong>No Backend:</strong> Full client-side state management with LocalStorage persistence.</li>
                    <li><strong>Custom DSA Library:</strong> Stack, Queue, and Sorting logic written from scratch.</li>
                    <li><strong>Responsive UI:</strong> CSS Grid/Flexbox layout that adapts to Mobile and Desktop.</li>
                    <li><strong>Theme:</strong> Professional UI with glassmorphism effects and clean typography (Inter font).</li>
                    <li><strong>Undo Capability:</strong> Granular state rollback for cart actions.</li>
                    <li><strong>Checkout Simulation:</strong> Order placement and history tracking.</li>
                </ul>
            </section>
        </div>
    );
};
