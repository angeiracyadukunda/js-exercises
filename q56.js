

function findArrayIntersection(array1, array2) {
    // Use the filter method to create a new array containing common elements
    return array1.filter(element => array2.includes(element));
}

// Example usage:
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Intersection:", findArrayIntersection(arrayA, arrayB)); // Output: [3, 4, 5]
