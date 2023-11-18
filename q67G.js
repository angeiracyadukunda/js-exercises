function findDuplicateElements(array) {
    const seen = {};
    const duplicates = [];

    array.forEach(num => {
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    });

    return duplicates;
}

// Example usage:
const numbersArray = [1, 2, 2, 3, 4, 4, 5];
console.log("Duplicate elements:", findDuplicateElements(numbersArray));
