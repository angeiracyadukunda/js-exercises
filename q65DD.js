function getTrafficLightColor(code) {
    switch (code) {
        case 1:
            return "Red";
        case 2:
            return "Yellow";
        case 3:
            return "Green";
        default:
            return "Invalid code";
    }
}

// Example usage:
const lightCode = 2;
console.log(`Traffic light color is:`, getTrafficLightColor(lightCode));
