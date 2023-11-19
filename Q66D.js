function filterGreaterThanTen(array) {
    return array.filter(num => num >= 10);
}

// Example usage:
const numbersArray = [5, 12, 8, 15, 3, 20];
console.log("Original array:", numbersArray);
console.log("Filtered array (>= 10):", filterGreaterThanTen(numbersArray));
