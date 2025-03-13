// Function to calculate the area of a circle given its radius
function CircleArea(radius: number): number {
    // Using the Math.PI for importing pi
    return Math.PI * radius**2;
}

// using a constant to create a variable that will hold the number for calculations
const circleRadius: number = 5;
// the dollar symbol is for intorpolation purposes
console.log(`The area of a circle with radius ${number} is: ${CircleArea(number).toFixed(2)}`);
