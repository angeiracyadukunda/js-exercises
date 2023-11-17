function getFirstNElements(array, n) {
    // Use the slice method to get the first n elements
    return array.slice(0, n);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const numberOfElementsToGet = 3;
const firstNElements = getFirstNElements(originalArray, numberOfElementsToGet);

console.log("Original Array:", originalArray);
console.log(`First ${numberOfElementsToGet} Elements:`, firstNElements);
