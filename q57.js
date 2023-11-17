


function isPrime(number) {
    if (number <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
const primeNumber = 17;
const nonPrimeNumber = 20;

console.log(`${primeNumber} is a prime number:`, isPrime(primeNumber)); // Output: true
console.log(`${nonPrimeNumber} is a prime number:`, isPrime(nonPrimeNumber)); // Output: false
