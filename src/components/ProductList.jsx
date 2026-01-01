import React, { useState } from 'react';
import { products } from '../data/products';
import { mergeSort } from '../dsa/Sorting';

export const ProductList = ({ addToCart }) => {
    const [sortBy, setSortBy] = useState('default');

    // ---------------- DSA: Sorting (Merge Sort) ----------------
    // We are using our manual Merge Sort implementation from /src/dsa/Sorting.js
    // instead of the built-in .sort() method to demonstrate Algorithm knowledge.
    // Time Complexity: O(n log n)
    const sortedProducts = mergeSort([...products], (a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return a.id - b.id; // default
    });

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 0' }}>
            <div className="page-header">
                <div>
                    <h2 className="page-title">Featured Products</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Browse our premium collection</p>
                </div>
                <div style={styles.controls}>
                    <label style={{ marginRight: '10px', fontWeight: '500', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={styles.select}
                    >
                        <option value="default">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="product-grid">
                {sortedProducts.map(product => (
                    <div key={product.id} className="card" style={styles.productCard}>
                        <div style={styles.imageContainer}>
                            <img src={product.image} alt={product.name} style={styles.image} />
                        </div>
                        <div style={styles.details}>
                            <span className="badge">{product.category}</span>
                            <h3 style={styles.name}>{product.name}</h3>
                            <p style={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: 'auto' }}
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
    },
    productCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        overflow: 'hidden',
        height: '100%'
    },
    imageContainer: {
        height: '200px',
        overflow: 'hidden',
        background: '#f1f5f9'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    details: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flex: 1
    },
    name: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--text-primary)'
    },
    price: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--primary-color)',
        marginBottom: '1rem'
    },
    select: {
        padding: '0.5rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-color)',
        outline: 'none',
        fontFamily: 'inherit'
    }
};
