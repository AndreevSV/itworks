// Exercise 1 - Callbacks
// Write a function pushPull that takes one argument - a function - and invokes that function:

// const push = function () {
//   console.log("pushing it!");
// };

// const pull = function () {
//   console.log("pulling it!");
// };

// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"

const pushPull = function (pull) {
    console.log("pushing it!");
    pull();
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  pushPull(pull) //should print "pushing it!"
