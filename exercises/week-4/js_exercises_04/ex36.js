// Exercise 36

// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting

// Instructions

// Without running the code below, explain in your own words what the result of each block of
// code will be and why. If there are any faulty outputs, please write on how we can fix them.

/*
// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
*/

// Block 1
function funcA() {
  var a = 1;
  console.log(a);
  console.log(foo());
  function foo() {
    return 2;
  }
}
funcA();
// 1st console.log will be undefined because it was defined after the console.log function.
// You should put var a = 1 above console.log(a);
// 2nd output will be "2" because of return operator of function foo()

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName();
console.log(test);
// 1st console log will print "Aurelio De Rosa" because function getFullName will take ("this" operator)
// key "fullName" from object 'obj.prop'
// 2nd console log will be undefined because you don't use round brackets for calling a function in var test
// and you need to delete round brackets from console.log(test())

// Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
let a = funcB();
console.log(typeof a);
console.log(typeof b);
// 1st - You will get undefined because variable 'a' defined just in function and its area of visibility
// into the function. To get this variable you should assign the function a variable, for example 'a'
// 2nd console.log will get a 'number' because 'b' is a global variable because it wasn't defined

// Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// If same function deсlared some times will execute just last declaration so many times as invoked - 2

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
  return e;
}
e = funcD2();
console.log(e);
// 1st will print 1 because d is a global variable without let, const or var;
// 2nd will print a error because e - is a local variable and was not returned from function funcD2()
// and 'e' was not declared outside this function. To correct this you should return variable from
// function and assing a function to variable, for example with the same name

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
var f = 1;
console.log("Value of f in global scope: ", f);
funcE();
// 1st - underfined
// 2nd - 1
// when declare variable its declaration hoisted to the top of the scope but assignment not housted
// because of that will be executed without an error just funcE();
// To correct that you need to lift it up under the function or under the second console.log 
