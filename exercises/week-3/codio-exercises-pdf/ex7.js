// Exercise 7

// The following exercise contains the following subjects:
// ● Declaring functions 2

// Instruction
// Copy the code below to your computer, answer the questions on the file, and submit.

/*
JavaScript - Declaring Functions
The following exercise contains the following subjects:
* functions

Instructions
* Please reformat the following function expressions to IIFE functions.
* Please reformat the following function declarations in two ways, explicit return and implicit return functions.
*/

// From function declarations to explicit and implicit return functions (one of each).
// Function declaration
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
// Explicite function
let welcomeExpliciteFunction = (function(){return "Welcome to Appleseeds Bootcamp!"}) ();
// Implicite function
let welcomeImpliciteFunction = (() => "Welcome to Appleseeds Bootcamp!")();

// Function declaration
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
// Explicite function
let powerExpliciteFunction = (function(a) {return Math.pow(a, 2)})();
// Implicite function
let powerImpliciteFunction = ((a) => Math.pow(a, 2)) ();

// From function expressions to IIFE functions.

// Function expression
const squareRoot = (a) => Math.sqrt(a);
// IIFE 
const squareRootIIFE = ((a) => Math.sqrt(a))();

// Function expression
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// IIFE 
const randomNumbersIIFE = ((a, b) => Math.random() * (a - b) + b) ();