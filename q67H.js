function bubbleSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements if they are in the wrong order
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

// Example usage:
const unsortedArray = [5, 2, 8, 3, 1, 7];
console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", bubbleSort(unsortedArray));
