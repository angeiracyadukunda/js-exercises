

function showMenu() {
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Option 3");
}

function handleMenuOption(option) {
    switch (option) {
        case 1:
            console.log("Executing Option 1");
            break;
        case 2:
            console.log("Executing Option 2");
            break;
        case 3:
            console.log("Executing Option 3");
            break;
        default:
            console.log("Invalid option");
    }
}

// Example usage:
showMenu();
const selectedOption = 2;
handleMenuOption(selectedOption);
