


function sortObjectKeysAlphabetically(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObject = {};

    for (let key of sortedKeys) {
        sortedObject[key] = obj[key];
    }

    return sortedObject;
}

// Example usage:
const unsortedObject = { c: 3, a: 1, b: 2 };
console.log("Unsorted object:", unsortedObject);
const sortedObject = sortObjectKeysAlphabetically(unsortedObject);
console.log("Sorted object:", sortedObject);
