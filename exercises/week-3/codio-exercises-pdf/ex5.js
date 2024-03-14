// Exercise 5 

// The following exercise contains the following subjects:
// ● date methods

// Instructions

// Let us self-learn something. 
// You come to your new workplace and you are an expert in the technologies your company is working with. 
// But all of the sudden your boss says. We want to implement a feature with dates. 
// This will happen all the time in your career. So let's roll up our sleeves and start googling. How to .... “date js”.
// And as always the MDN docs are a great source. Find how to get the following:
// 1. Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 4. Current Year e.g 2021
// Create a function that will return a string in the following format: `Today is Sunday the 31 of January 2021’

function getCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    let day = currentDate.getDay(currentDate);
    let date = currentDate.getDate(currentDate);
    let month = currentDate.getMonth(currentDate);
    let year = currentDate.getFullYear(currentDate);
    return "Today is " + daysOfWeek[day] + " the " + date + " of " + months[month] + " " + year ;
}

console.log(getCurrentDay());
