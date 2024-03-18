// Exercise 34

// JavaScript – average

// The following exercise contains the following subjects:
// ● debugging

// Instructions

// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?

// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// function calcAverage(arr) {
//   var sum;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// calcAverage([85, 90, 92]);

function calcAverage(arr) {
    var sum = 0; // you should not only declare variable, but also set a value
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length; // for average you shoul divide a sum on length of an array
  }
  calcAverage([85, 90, 92]);

  console.log(calcAverage([85, 90, 92]));