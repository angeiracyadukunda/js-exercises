function findGreaterNumber(number1, number2) {
    // Using the ternary operator to determine the greater number
    const greaterNumber = (number1 > number2) ? number1 : number2;
    return greaterNumber;
}

// Example usage:
const result = findGreaterNumber(8, 5);
console.log(`The greater number is: ${result}`);
