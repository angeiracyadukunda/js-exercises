// Step 1: Function Definition
function calculator(num1, num2, operator) {
    // Step 2: Variable Declaration
    let result;

    // Step 3: Switch Statement
    switch (operator) {
        // Case '+': Addition
        case '+':
            result = num1 + num2;
            break;

        // Case '-': Subtraction
        case '-':
            result = num1 - num2;
            break;

        // Case '*': Multiplication
        case '*':
            result = num1 * num2;
            break;

        // Case '/': Division
        case '/':
            // Check if num2 is not zero before division
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Cannot divide by zero.");
                return; // Exit the function for division by zero
            }
            break;

        // Default: Invalid Operator
        default:
            console.log("Invalid operator");
            return; // Exit the function for an invalid operator
    }

    
    console.log(`Result: ${result}`);
}


calculator(5, 3, '+'); 
calculator(5, 3, '-'); 
calculator(5, 3, '*'); 
calculator(5, 3, '/'); 
calculator(5, 0, '/'); 
calculator(5, 3, '%'); 
