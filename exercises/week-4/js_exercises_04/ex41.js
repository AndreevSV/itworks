// Exercise 41

/* JavaScript – closures

The following exercise contains the following subjects:
● closures

Instructions
Without running the code below, explain in your own words what the result of each block of code will be and why.
 */

// Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// Answer: To the firstResult variable will be assigned a otherFunction as a return value of inner function
// To the result variable will assigned '5' because it was assigned during invocation someFunction so variable 'b' is a global variable

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
// Answer: Firstly global variable 'a' will be assigned to 10 during invocation of b2 function. But because of return operator 
// without any returning value leaves 'a' variable the value 1, because of that console log will display '1'   

// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// Answer: This will display 3 times number '3' because of setTimeout function for 'log' function 
// Because of that loop 'for' will be completed before 'log' function. So the value of 'i' to that time will be already '3'  
