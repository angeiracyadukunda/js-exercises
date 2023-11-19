

function sumOfDigits(number) {
    return String(number).split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

// Example usage:
const number = 12345;
const digitSum = sumOfDigits(number);
console.log(`Sum of digits of ${number}:`, digitSum);
