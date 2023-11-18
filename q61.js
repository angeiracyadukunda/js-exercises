function containsOnlyDigits(inputString) {
    // Use a regular expression to check if the string contains only digits
    return /^\d+$/.test(inputString);
}

// Example usage:
const string1 = "12345";
const string2 = "abc123";

console.log(`"${string1}" contains only digits:`, containsOnlyDigits(string1)); // Output: true
console.log(`"${string2}" contains only digits:`, containsOnlyDigits(string2)); // Output: false
