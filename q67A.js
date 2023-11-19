function printObjectProperties(obj) {
    for (let prop in obj) {
        console.log(prop);
    }
}

// Example usage:
const sampleObject = { name: 'John', age: 25, city: 'Example City' };
console.log("Object Properties:");
printObjectProperties(sampleObject);
