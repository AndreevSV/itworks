// Exercise 12

// The following exercise contains the following subjects:
// ● JavaScript

// Instructions
// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print “BOOM-BOOM”
// If either of the above cases prints the number.

// Example of numbers between 1 to 18:
// 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18

// Hint:
// Use the includes method to find out if the number includes a 7.

function printNumbersTillExactNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let sevenIncluded = (function(num){
        let str = num.toString();
        if(str.includes('7')){
            return true;
        }
    })(i);
    
    if (i % 7 == 0) {
        if (sevenIncluded) {
            process.stdout.write('BOOM-BOOM, ');
        } else {
            process.stdout.write('BOOM, ');
        } 
    } else {
        process.stdout.write(i + ', ');
    }
  }
}

printNumbersTillExactNumbers(18);