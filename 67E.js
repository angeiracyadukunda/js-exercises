function filterObject(obj, condition) {
    const filteredObject = {};

    for (let key in obj) {
        if (condition(obj[key])) {
            // Include key-value pair if the condition is met
            filteredObject[key] = obj[key];
        }
    }

    return filteredObject;
}

// Example usage:
const originalObject = {
    age: 25,
    name: 'John',
    city: 'Example City',
    salary: 50000,
    department: 'IT'
};

// Filter out key-value pairs where the value is a string
const filteredObject = filterObject(originalObject, value => typeof value !== 'string');

console.log("Original object:", originalObject);
console.log("Filtered object (excluding string values):", filteredObject);
