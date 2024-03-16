//Exercise 23

// The following exercise contains the following subjects:
// ● arrays
// ● indexOf

// Instructions
// Create a function that received an array of integers as a parameter.
// Return a new array without any duplicates inside. You indexOf as part of your solution.

// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

const integersArray = [3, 4, 4, 3, 6, 3];

let deleteDuplicates = (function (integersArray) {
  let noDuplicatesArray = [];
  let firstElement = integersArray[0];
  noDuplicatesArray.push(firstElement);
  for (let i = 1; i < integersArray.length; i++) {
    let element = integersArray[i];
    if (noDuplicatesArray.indexOf(element) == -1) {
      noDuplicatesArray.push(element);
    }
  }
  console.log(noDuplicatesArray);
})(integersArray);
