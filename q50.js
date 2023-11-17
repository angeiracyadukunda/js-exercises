
function isSortedAscending(array) {
    // Use the every method to check if every element is less than or equal to its successor
    return array.every((element, index, array) => index === 0 || element >= array[index - 1]);
}

// Example usage:
const sortedArray = [1, 2, 3, 5, 8];
const unsortedArray = [4, 2, 7, 1, 9];

console.log("Is the array sorted in ascending order? (Sorted):", isSortedAscending(sortedArray)); // Output: true
console.log("Is the array sorted in ascending order? (Unsorted):", isSortedAscending(unsortedArray)); // Output: false
