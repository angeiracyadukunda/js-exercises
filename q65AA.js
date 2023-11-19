function calculateResult(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Check if the second number is not 0 to avoid division by zero
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

// Example usage:
const number1 = 10;
const number2 = 5;
const operation = '+';

const result = calculateResult(number1, number2, operation);
console.log(`Result of ${number1} ${operation} ${number2} is:`, result);
