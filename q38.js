// Write a function that removes duplicates from an array.

function removeDuplicates(array) {
    // Use the Set data structure to automatically remove duplicates
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithoutDuplicates);
