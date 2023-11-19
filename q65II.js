function detectSeason(monthNumber) {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Fall";
        default:
            return "Invalid month number";
    }
}

// Example usage:
const monthNumber = 8;
console.log(`The season for month ${monthNumber} is:`, detectSeason(monthNumber));
