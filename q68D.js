function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Example usage:
const num1 = 48;
const num2 = 18;
const resultGCD = gcd(num1, num2);
console.log(`GCD of ${num1} and ${num2}:`, resultGCD);
