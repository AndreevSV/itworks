// Exercise 40

// JavaScript – Font size changer

// The following exercise contains the following subjects:
// ● DOM

// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const someTextElement = document.getElementById('someText'); 

const increaseButton = document.getElementById('up');
const decreaseButton = document.getElementById('down');

increaseButton.addEventListener('click', function() {
    let currentSize = parseInt(window.getComputedStyle(someTextElement).fontSize);
    console.log(currentSize);
    someTextElement.style.fontSize = Math.min(currentSize + 2, 100) + 'px';
    
})

decreaseButton.addEventListener('click', function () {
    let currenSize = parseInt(window.getComputedStyle(someTextElement).fontSize);
    console.log(currenSize);
    someTextElement.style.fontSize = Math.max(currenSize - 2, 6) + 'px';
})