function calculateRectanglePerimeter(length, width) {
    // Calculate the perimeter using the formula
    const perimeter = 2 * (length + width);
    return perimeter;
}

// Example usage:
const rectangleLength = 5;
const rectangleWidth = 3;

const perimeterResult = calculateRectanglePerimeter(rectangleLength, rectangleWidth);
console.log(`Perimeter of the rectangle: ${perimeterResult}`);
