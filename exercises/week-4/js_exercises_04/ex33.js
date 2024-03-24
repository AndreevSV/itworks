// Exercise 33

// JavaScript – sum of even

// The following exercise contains the following subjects:
// ● debugging

// Instructions
// # Note: We ask you not to solve the bug by finding it with your eyes but to use the
// debugging tools we've learned!
// What is wrong with this code?

// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
//    we want to sum all numbers in even cells in arrays of size 10:
//    [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30

// function getSumOfEven(arr) {
//   return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
// }
// getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9]; // Array indexing starts from 0, not 1
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
