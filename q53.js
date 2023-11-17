

function findMedian(array) {
    // Sort the array
    const sortedArray = array.slice().sort((a, b) => a - b);
    const length = sortedArray.length;

    // Calculate the median based on array length
    if (length % 2 === 0) {
        const middle1 = sortedArray[length / 2 - 1];
        const middle2 = sortedArray[length / 2];
        return (middle1 + middle2) / 2;
    } else {
        return sortedArray[Math.floor(length / 2)];
    }
}

// Example usage:
const numbersToFindMedian = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const medianResult = findMedian(numbersToFindMedian);

console.log("Array:", numbersToFindMedian);
console.log("Median:", medianResult);
