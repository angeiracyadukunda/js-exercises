function countCharactersWithoutSpaces(inputString) {
    // Remove spaces from the input string
    const stringWithoutSpaces = inputString.replace(/\s/g, '');

    // Count the number of characters in the string without spaces
    const numberOfCharacters = stringWithoutSpaces.length;

    return numberOfCharacters;
}

// Example usage:
const inputString = "Hello World";
const characterCount = countCharactersWithoutSpaces(inputString);

console.log(`For the string: "${inputString}"`);
console.log(`The number of characters is: ${characterCount}`);
