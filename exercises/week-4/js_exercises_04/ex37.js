// Exercise 37

// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions

// Instructions
// Please make the following changes to the HTML file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”. 
// Use traverse methods to complete these tasks:

// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your

//    Note:
//    On the next page, you have the HTML code

const startElem = document.getElementsByClassName("start-here")[0];
startElem.innerHTML = "main title";

const parentElem = document.querySelector("ul > li > ul");
const newLiElem = document.createElement("li");
newLiElem.textContent = "subtitle 4";

parentElem.appendChild(newLiElem);

parentElem.removeChild(parentElem.lastChild);

const titleElem = document.getElementsByTagName('title')[0];

titleElem.innerHTML = 'Master Of The Dom';

const pElem = document.getElementsByTagName('p')[0];
pElem.innerHTML = "Changed in DOM"; 