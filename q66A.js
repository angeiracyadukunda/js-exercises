function calculateArraySum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
console.log("Sum of array elements:", calculateArraySum(numbersArray));
