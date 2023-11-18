function manipulateArray(array) {
    // Sort the array in ascending order
    const sortedArray = array.slice().sort((a, b) => a - b);

    // Display the last 3 numbers and the first 3 numbers in front of the sorted array
    const modifiedArray = array.slice(-3).concat(sortedArray, array.slice(0, 3));

    // Display the first 3 numbers from the sorted array
    const firstThreeNumbers = sortedArray.slice(0, 3);

    return {
        sortedArray: sortedArray,
        modifiedArray: modifiedArray,
        firstThreeNumbers: firstThreeNumbers
    };
}

// Example usage:
const someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
const result = manipulateArray(someNumbers);

console.log("Sorted Array:", result.sortedArray);
console.log("Modified Array:", result.modifiedArray);
console.log("First Three Numbers from Sorted Array:", result.firstThreeNumbers);
