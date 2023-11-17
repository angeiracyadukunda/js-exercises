function countConsonants(inputString) {
    // Regular expression to match consonants (non-vowels)
    const consonantRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;

    // Use the match method with the regular expression to get an array of consonants
    const consonantsArray = inputString.match(consonantRegex);

    // Check if consonantsArray is null (no consonants found)
    if (consonantsArray === null) {
        return 0; // Return 0 if no consonants found
    } else {
        return consonantsArray.length; // Return the number of consonants
    }
}

// Example usage:
const testString = "Hello, World!";
const consonantCount = countConsonants(testString);
console.log(`The number of consonants in "${testString}" is: ${consonantCount}`);
