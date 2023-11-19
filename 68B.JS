

function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

// Example usage:
const numbers = [3, 7, 1, 9, 4, 2];
const { max, min } = findMaxAndMin(numbers);
console.log("Array:", numbers);
console.log("Max value:", max);
console.log("Min value:", min);
