function printEvenNumbers(array) {
    array.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
printEvenNumbers(numbersArray);
