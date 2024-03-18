//Exercise 32

// JavaScript – get sum

// The following exercise contains the following subjects:
// ● find smallest

// Instructions
// # Note: We ask you not to solve the bug by finding it with your eyes but to use 
// the debugging tools we've learned!
// What is wrong with this code?

// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// function findSmallest(a, b, c) {
//   if (a > b > c) {
//     return c;
//   } else if (a > c > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// findSmalest(52, 66, 2);

function findSmallest(a, b, c) {
  if (a < b && a < c) { // It's not possible to use two operators of comparison such way, only using && operator
    return a;
  } else if (b < a && b < c) { // It's not possible to use two operators of comparison such way, only using && operator
    return b;
  } else {
    return c;
  }
}
findSmallest(52, 66, 2); // Mistake in a function name - lost letter - 'l'

console.log(findSmallest(52, 66, 2));
