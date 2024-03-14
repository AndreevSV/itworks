// Exercise 4

// The following exercise contains the following subjects:
// ● functions

// Instructions
// Write a function that calculates the circle area by a given radius as an argument. 
// Print the area as it is calculated and then print it rounded to two decimal places.

let radius;
const pi = 3.14159265359;
let area;

function calculateCircleArea(radius){
    area = pi * (radius ** 2);
    return area;
}

console.log(calculateCircleArea(5));

console.log(area.toFixed(2));