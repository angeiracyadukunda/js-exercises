

function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}

// Example usage:
const fibSequence = fibonacci(8);
console.log("Fibonacci Sequence:", fibSequence);

