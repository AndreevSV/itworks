// Exercise 1
// Write a function called isEven that accepts a number as a parameter and checks 
// if the number is even or not. Return true if it is even or false if it is odd. 
// Don’t Google this one ;) Use modulo %

function isEven(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(11));

// Exercise 2
// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1) 
// print out the odd numbers.

const numbers = [1, 3, 6, 9, 22, 18];

function printOddNumbers(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 > 0) {
            oddNumbers.push(number);
        }
    }
    console.log(oddNumbers);
}

printOddNumbers(numbers);
