/**
 * Merge Sort Implementation
 * A generic O(n log n) sorting algorithm for Arrays.
 * 
 * Concept:
 * - Divide: Recursively split array into halves until 1 elements remain.
 * - Conquer: Merge the sorted sub-arrays back together.
 * 
 * Time Complexity: O(n log n) - Best/Average/Worst case.
 * Space Complexity: O(n) - Requires auxiliary space for merging.
 * 
 * @param {Array} array - The array to sort
 * @param {Function} comparator - Function to compare two elements (returns <0, 0, >0)
 * @returns {Array} - A new sorted array (does not mutate original)
 */
export const mergeSort = (array, comparator) => {
    // Base Case: Arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Divide
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively Sort
    const sortedLeft = mergeSort(left, comparator);
    const sortedRight = mergeSort(right, comparator);

    // Conquer (Merge)
    return merge(sortedLeft, sortedRight, comparator);
};

// Helper function to merge two sorted arrays
const merge = (left, right, comparator) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one
    while (leftIndex < left.length && rightIndex < right.length) {
        const comparison = comparator(left[leftIndex], right[rightIndex]);

        if (comparison <= 0) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements (if any)
    // Only one of these loops will run
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
