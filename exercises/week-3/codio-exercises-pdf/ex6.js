// Exercise 6

// The following exercise contains the following subjects:
// ● Declaring functions 1

// Instruction
// Copy the code below to your computer, answer the questions on the file, and submit.

/*
JavaScript - Declaring Functions
The following exercise contains the following subjects:
* functions

Instructions
* Please reformat the following function declarations to function expression.
* Please reformat the following function expressions to function declarations.
*/

// ---------------------------------------------------

// From function declarations to function expressions

// Function declaration
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
// Function expression
let welcomeFunctionExpression = function () {
  return "Welcome to Appleseeds Bootcamp!";
};
// Function expression 2
let welcomeFunctionExpression2 = () => "Welcome to Appleseeds Bootcamp!";

// Function declartion
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
//Function expression
let powerFunctionExpression = function (a) {
  return Math.pow(a, 2);
};
//Function expression 2
let powerFunctionExpression2 = (a) => Math.pow(a, 2);

//Function declaration
function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}
// Function expression
let addFunctionExpression = function (a, b = 5) {
  return a + b;
}
// Function expression 2
let addFunctionExpression2 = (a, b = 5) => a + b;

// ---------------------------------------------------

// From function expressions to function declarations

//Function expression
const hello = () => "Hello!";
//Function declaration
function helloFunctionDeclaration(){
    return "Hello!";
}

//Function expression
const squareRoot = (a) => Math.sqrt(a);
//Function declaration
function squareRootFunctionDeclaration(a) {
    return Math.sqrt(a);
}

//Function expression
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// Function declaration
function randomNumbersFunctionDeclaration(a, b){
    return Math.random() * (a - b) + b;
}


