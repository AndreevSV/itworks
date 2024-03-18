// Exercise 35

// JavaScript – occurences

// The following exercise contains the following subjects:
// ● debugging

// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?

// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// function countOccurrences(str, char) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === char) {
//       counter + 1;
//     }
//   }
//   return counter;
// }
// countOccurrences("ini mini miny moe", "n");

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++; // the problem was that counter variable not encreased because was not set here its value.
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

console.log(countOccurrences("ini mini miny moe", "n"));
