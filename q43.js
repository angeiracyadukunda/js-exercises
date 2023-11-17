

function sortAscending(numbers) {
    // Use the sort method to sort the array in ascending order
    return numbers.slice().sort((a, b) => a - b);
}

// Example usage:
const unsortedArray = [5, 2, 8, 1, 7];
const sortedArray = sortAscending(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array (Ascending):", sortedArray);
