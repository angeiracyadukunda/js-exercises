function findElementIndex(array, target) {
    const index = array.indexOf(target);
    return index !== -1 ? index : "Element not found";
}

// Example usage:
const numbersArray = [10, 20, 30, 40, 50];
const targetElement = 30;
console.log(`Index of ${targetElement}:`, findElementIndex(numbersArray, targetElement));
