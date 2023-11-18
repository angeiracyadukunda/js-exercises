

function calculateShapeArea(shape, params) {
    switch (shape) {
        case 'circle':
            const radius = params.radius;
            return Math.PI * Math.pow(radius, 2);
        case 'square':
            const sideLength = params.sideLength;
            return Math.pow(sideLength, 2);
        case 'triangle':
            const base = params.base;
            const height = params.height;
            return (base * height) / 2;
        default:
            return "Invalid shape";
    }
}

// Example usage:
const circleParams = { radius: 5 };
console.log(`Area of the circle is:`, calculateShapeArea('circle', circleParams));

const squareParams = { sideLength: 4 };
console.log(`Area of the square is:`, calculateShapeArea('square', squareParams));

const triangleParams = { base: 6, height: 3 };
console.log(`Area of the triangle is:`, calculateShapeArea('triangle', triangleParams));
