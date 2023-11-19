

function transformObjectValuesToUpper(obj) {
    const transformedObject = {};

    for (let key in obj) {
        transformedObject[key] = String(obj[key]).toUpperCase();
    }

    return transformedObject;
}

// Example usage:
const mixedCaseObject = { name: 'John', age: 25, city: 'Example City' };
console.log("Original object:", mixedCaseObject);
const upperCaseObject = transformObjectValuesToUpper(mixedCaseObject);
console.log("Transformed object (values to uppercase):", upperCaseObject);
