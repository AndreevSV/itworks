// Exercise 2 - Callbacks
// You can get the current date/time in Javascript by writing: const time = new Date().
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.

// const returnTime = function (time) {
//   alert("The current time is: " + time);
// };

// getTime(returnTime);

const getTime = function(returnTime) {
    let time = new Date();
    returnTime(time); 
}



const returnTime = function (time) {
  alert("The current time is: " + time);
};

getTime(returnTime);
