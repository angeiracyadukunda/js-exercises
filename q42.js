

// remove the last elemt in array

function removeLastElement(array) {
    // Use the pop method to remove the last element
    array.pop();
    return array;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
removeLastElement(originalArray);

console.log("Original Array (after removing the last element):", originalArray);
