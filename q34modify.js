function stringModifier(inputString, position, replacementChar) {
    // Check if the position is valid
    if (position < 0 || position >= inputString.length) {
        console.log("Invalid position. Please provide a valid position within the string.");
        return inputString; // Return the original string if the position is invalid
    }

    // Convert the string to an array to modify the character at the specified position
    const modifiedArray = inputString.split('');
    modifiedArray[position] = replacementChar;

    // Join the array back into a string
    const modifiedString = modifiedArray.join('');
    return modifiedString;
}

// Example usage:
const originalString = "Hello, World!";
const modifiedResult = stringModifier(originalString, 7, 'X');
console.log(`Original String: ${originalString}`);
console.log(`Modified String: ${modifiedResult}`);
