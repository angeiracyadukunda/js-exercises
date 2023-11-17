function findCharIndex(inputString, targetChar) {
    // Use the indexOf method to find the index of the target character
    const charIndex = inputString.indexOf(targetChar);

    // Return the index, or -1 if the character is not found
    return charIndex;
}

// Example usage:
const testString = "Hello, World!";
const targetCharacter = "o";
const charIndex = findCharIndex(testString, targetCharacter);

if (charIndex !== -1) {
    console.log(`The index of "${targetCharacter}" in "${testString}" is: ${charIndex}`);
} else {
    console.log(`"${targetCharacter}" not found in "${testString}"`);
}
