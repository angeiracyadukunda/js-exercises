function sumOfEvenNumbers(numbers) {
    // Use the reduce method to sum even numbers
    return numbers.reduce((sum, number) => (number % 2 === 0) ? sum + number : sum, 0);
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Sum of Even Numbers:", sumOfEvenNumbers(numbersArray)); // Output: 30 (2 + 4 + 6 + 8 + 10)
