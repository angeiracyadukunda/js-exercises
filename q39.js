
// Write a function that checks if a given value is present in an array.

function isValuePresent(array, value) {
    // Use the includes method to check if the value is present in the array
    return array.includes(value);
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const valueToCheck = 3;

if (isValuePresent(myArray, valueToCheck)) {
    console.log(`${valueToCheck} is present in the array.`);
} else {
    console.log(`${valueToCheck} is not present in the array.`);
}
