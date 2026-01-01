/**
 * Queue Implementation (FIFO - First In, First Out)
 * Used for: Order History and Checkout Processing.
 * 
 * Performance:
 * - enqueue(item): O(1)
 * - dequeue(): O(n) (using Array.shift) - *Note: Could be O(1) with LinkedList, but Array is sufficient for this scale.*
 * - front(): O(1)
 * - isEmpty(): O(1)
 */
export class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    // View the front element
    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Get all items (for visualization)
    getAll() {
        return [...this.items];
    }
}
