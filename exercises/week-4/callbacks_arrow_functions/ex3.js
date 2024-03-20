// Exercise 3 - Callbacks

// Given the following code, what error do you get? Write the missing part to make the code work:
// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// displayData(alert, logData, "I like to party");
// Note: do not change any of the code above. You only need to add something to make this work. Remember, alert is a built-in function in JS.

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const alertData = function (data) {
    alert(data);
};

const logData = function (data) {
    console.log(data);
};
  
displayData(alertData, logData, "I like to party");