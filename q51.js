

function filterNegativeNumbers(array) {
    // Use the filter method to create a new array with only positive numbers
    return array.filter(number => number >= 0);
}

// Example usage:
const numbersArray = [1, -2, 3, -4, 5];

console.log("Original Array:", numbersArray);
console.log("Array without Negative Numbers:", filterNegativeNumbers(numbersArray));
