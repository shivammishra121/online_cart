# 🛒 Online Shopping Cart (DSA Project)

> **A professional React application demonstrating the practical application of Data Structures & Algorithms in frontend development.**

![Project Preview](https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## 📖 Overview
This project is an **Order Management & Shopping System** built from scratch using **React**. Unlike standard e-commerce demos, this project explicitly implements custom Data Structures (Stack, Queue, HashMap) and Algorithms (Merge Sort) to handle core business logic, replacing built-in JavaScript methods where educational value is paramount.

It features a **Hidden "Internals" Page** at `/about` that documents these implementations live within the app.

---

## 🧠 Deep Dive: Data Structures & Algorithms (Why & How)

### 1. Merge Sort (Algorithm)
*   **Why we used it:**
    *   **Performance**: Standard `Bubble Sort` is slow ($O(n^2)$) for large lists. `Merge Sort` is much faster ($O(n \log n)$), ensuring the app doesn't freeze even with thousands of products.
    *   **Educational**: It demonstrates the **Divide and Conquer** strategy—breaking a problem into smaller pieces and solving them.
*   **How it works (`src/dsa/Sorting.js`):**
    1.  **Divide**: It recursively splits the product array into two halves until single items remain.
    2.  **Conquer**: It runs a `merge` function that compares the prices of the items from the two halves and zippers them back together in the correct order.

### 2. Hash Map (Data Structure)
*   **Why we used it:**
    *   **Speed**: If we used an `Array` for the cart, finding a specific item to update its quantity would require searching through the list every time ($O(n)$). With a **Hash Map** (Object), we can find any item instantly ($O(1)$) using its ID.
*   **How it works (`src/hooks/useCart.js`):**
    *   We store items using Key-Value pairs: `{ "101": { id: 101, name: "Keyboard", quantity: 2 } }`.
    *   **Check Existence**: `if (cart[101])` -> **Instant Lookup**.
    *   **Update**: `cart[101].quantity++` -> **Instant Access**.

### 3. Stack (Data Structure)
*   **Why we used it:**
    *   **Logic**: A Stack follows **LIFO** (Last-In, First-Out). This is the exact logic needed for an **Undo** button. You want to revert the *most recent* change first.
*   **How it works (`src/dsa/Stack.js`):**
    *   **Push**: Before we change the cart (add/remove item), we take a snapshot of the *current* cart and `push()` it onto the `undoStack`.
    *   **Pop**: When you click "Undo", we `pop()` the last snapshot off the stack and force the cart to go back to that state.

### 4. Queue (Data Structure)
*   **Why we used it:**
    *   **Realism**: Order processing follows **FIFO** (First-In, First-Out). The first person to checkout should be the first one recorded in history.
*   **How it works (`src/dsa/Queue.js`):**
    *   **Enqueue**: When you click "Checkout", the current cart is turned into an order object and added to the back of the line (`enqueue`).
    *   **Visual**: The `OrderHistory` component loops through this list to show your past transactions in the order they happened.

---

## 🛠️ Technical Stack
- **Frontend**: React 19 (Vite)
- **Styling**: Vanilla CSS (CSS Variables, Responsive Grid/Flexbox)
- **State Management**: Custom React Hooks (`useCart`)
- **Persistence**: `localStorage` (Data persists on refresh)
- **Deployed On**: Vercel

---

## 📂 Project Structure
```bash
src/
├── components/       # UI Components
│   ├── About.jsx     # Hidden Documentation Page (/about)
│   ├── Cart.jsx      # Cart View (HashMap Visualization)
│   ├── Navbar.jsx    # Responsive Navigation
│   ├── ProductList.jsx # Main Grid (Merge Sort Implemented)
│   └── OrderHistory.jsx # Queue Visualization
├── data/
│   └── products.js   # Mock Product Inventory
├── dsa/              # CORE DSA LOGIC
│   ├── Queue.js      # Queue Class Implementation
│   ├── Stack.js      # Stack Class Implementation
│   └── Sorting.js    # Merge Sort Implementation
├── hooks/
│   └── useCart.js    # Central Logic (Integrates DSA Classes)
└── index.css         # Global Styles & Variables
```

---

## ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/online-cart-dsa.git
   cd online-cart-dsa
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📱 Mobile Responsiveness
The application uses a **Mobile-First** CSS approach:
- **Grid Layouts**: Automatically switch from multi-column to single-column on screens <768px.
- **Touch Targets**: Buttons and controls are sized for touch interaction.
- **Adaptive Headers**: Navigation and Page Headers stack vertically on mobile.

---

## 🔍 Hidden Features
**Developer Documentation**:
Navigate manually to `/about` in your browser URL bar (e.g., `https://your-app.com/about`) to view the internal architectural documentation page that is hidden from the main navigation menu.

---

## © License
**DSA Shopping Cart Project © 2025**
Built with React, Stack, Queue, HashMap, and Merge Sort.
