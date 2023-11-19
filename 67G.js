function getObjectSize(obj) {
    return Object.keys(obj).length;
}

// Example usage:
const sampleObject = { a: 5, b: 'hello', c: 10 };
console.log("Number of key-value pairs in the object:", getObjectSize(sampleObject));
