function manipulateObjectValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            // Double the values if they are numbers
            obj[key] *= 2;
        } else if (typeof obj[key] === 'string') {
            // Convert string values to uppercase
            obj[key] = obj[key].toUpperCase();
        }
        // Add more conditions as needed for different data types or criteria
    }
}

// Example usage:
const originalObject = {
    age: 25,
    name: 'John',
    city: 'Example City',
    salary: 50000,
    department: 'IT'
};

console.log("Original object:", originalObject);

manipulateObjectValues(originalObject);

console.log("Modified object:", originalObject);
