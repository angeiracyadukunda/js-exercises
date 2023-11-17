


function isLeapYear(year) {
    // Leap year is divisible by 4, but not divisible by 100 unless divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
const leapYear = 2020;
const nonLeapYear = 2022;

console.log(`${leapYear} is a leap year:`, isLeapYear(leapYear)); // Output: true
console.log(`${nonLeapYear} is a leap year:`, isLeapYear(nonLeapYear)); // Output: false
