function convertToUpperCase(stringsArray) {
    // Use the map method to convert each string to uppercase
    return stringsArray.map(str => str.toUpperCase());
}

// Example usage:
const originalStrings = ["apple", "banana", "orange"];

console.log("Original Strings:", originalStrings);
console.log("Uppercase Strings:", convertToUpperCase(originalStrings));
