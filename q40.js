// Write a function that squares each element of an array.


function squareArrayElements(array) {
    // Use the map method to create a new array with squared elements
    const squaredArray = array.map(element => element ** 2);
    return squaredArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const squaredArray = squareArrayElements(originalArray);

console.log("Original Array:", originalArray);
console.log("Squared Array:", squaredArray);


