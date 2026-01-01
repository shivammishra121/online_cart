import React from 'react';

export const Navbar = ({ cartCount, activeTab, setActiveTab }) => {
    return (
        <nav style={styles.nav}>
            <div className="container nav-container">
                <div style={styles.logo}>
                    Shopping<span style={{ color: 'var(--primary-color)' }}>Cart</span>
                </div>
                <div style={styles.links}>
                    <button
                        style={activeTab === 'products' ? styles.activeLink : styles.link}
                        onClick={() => setActiveTab('products')}
                    >
                        Products
                    </button>
                    <button
                        style={activeTab === 'cart' ? styles.activeLink : styles.link}
                        onClick={() => setActiveTab('cart')}
                    >
                        Cart ({cartCount})
                    </button>
                    <button
                        style={activeTab === 'history' ? styles.activeLink : styles.link}
                        onClick={() => setActiveTab('history')}
                    >
                        History
                    </button>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '1rem 0',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '700',
        letterSpacing: '-0.5px'
    },
    links: {
        display: 'flex',
        gap: '2rem'
    },
    link: {
        background: 'none',
        border: 'none',
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        padding: '0.5rem',
    },
    activeLink: {
        background: 'none',
        border: 'none',
        fontSize: '1rem',
        color: 'var(--primary-color)',
        fontWeight: '600',
        padding: '0.5rem',
        borderBottom: '2px solid var(--primary-color)'
    }
};
