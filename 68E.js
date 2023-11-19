

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = generateRandomNumber(1, 10);
console.log("Random number between 1 and 10:", randomNum);
