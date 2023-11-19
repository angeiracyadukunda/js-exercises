function calculateArrayAverage(array) {
    const sum = calculateArraySum(array);
    return sum / array.length;
}

// Example usage:
const numbersArray = [10, 20, 30, 40, 50];
console.log("Average of array elements:", calculateArrayAverage(numbersArray));
