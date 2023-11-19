function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example usage:
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log("Merged object:", mergedObject);
