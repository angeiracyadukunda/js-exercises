function areAllPositive(numbers) {
    // Use the every method to check if all elements are positive
    return numbers.every(number => number > 0);
}

// Example usage:
const positiveNumbers = [1, 3, 5, 7, 9];
const negativeNumbers = [-1, 2, 4, -6, 8];

console.log("Are all elements positive? (Positive Numbers):", areAllPositive(positiveNumbers)); // Output: true
console.log("Are all elements positive? (Negative Numbers):", areAllPositive(negativeNumbers)); // Output: false
