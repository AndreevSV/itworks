// Exercise 8

// The following exercise contains the following subjects:
// ● functions

// Instruction
// 1. The world population is 8097 million people. Create a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the percentage of the world population that the given
// population represents. For example, China has 1425 million people, so it's about 17.6% of the world
// population.
// 2. To calculate the percentage, divide the given 'population' value by 8097 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into
// variables and log them to the console.
// 4. Create a function expression that does the exact same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same populations)

// Function declaration
const worldPopulation = 8097; 
function percentageOfWorld1(population){
    return population / worldPopulation * 100; 
}

let chinaPercentage = percentageOfWorld1(1425);
let indiaPercentage = percentageOfWorld1(1437);
let usaPercentage = percentageOfWorld1(341);

let percentageOfWorld2 = (population) => population / worldPopulation * 100;

let chinaPercentage2 = percentageOfWorld2(1425);
let indiaPercentage2 = percentageOfWorld2(1437);
let usaPercentage2 = percentageOfWorld2(341);

console.log(chinaPercentage);
console.log(chinaPercentage2);

console.log(indiaPercentage);
console.log(indiaPercentage2);

console.log(usaPercentage);
console.log(usaPercentage2);