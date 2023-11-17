

function generateRandomNumber(min, max) {
    // Use Math.random() to generate a random decimal between 0 and 1,
    // then scale and shift it to the desired range using multiplication and addition
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = generateRandomNumber(1, 10);
console.log("Random Number between 1 and 10:", randomNum);
