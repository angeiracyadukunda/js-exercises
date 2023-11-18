function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        // Create spaces for alignment
        const spaces = ' '.repeat(height - i);

        // Create asterisks for the pyramid
        const asterisks = '*'.repeat(2 * i - 1);

        // Combine spaces and asterisks for each row
        console.log(spaces + asterisks);
    }
}

// Example usage:
const pyramidHeight = 4;

console.log(`Pyramid pattern of height ${pyramidHeight}:`);
generatePyramid(pyramidHeight);
