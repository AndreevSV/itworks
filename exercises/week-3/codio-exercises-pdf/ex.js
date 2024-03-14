//Exercise 1

// JavaScript – more on data types

// The following exercise contains the following subjects:
// ● data types

// Instructions
// 1. Create a variable whose value holds a string.
// 2. Create a variable whose value holds a number.
// 3. Create a variable whose value holds an object.
// 4. Create a variable whose value holds a boolean.
// 5. Create a variable whose value holds null.
// 6. Create a variable whose value is undefined.
// 7. Create a variable whose value holds a symbol.
// Console log the types of your variables.

let str = "String";
let num = 1;
let obj = {
    name: "Sergey",
    phones: [
        +972555050505,
        +972555050506]
    };
let bool = true;
let nul = null;
let und;
let smb = Symbol();

let arr = [str, num, obj, bool, nul, und, smb];

function printTypeOfVariable(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(typeof arr[i]);
    }
}

printTypeOfVariable(arr);





