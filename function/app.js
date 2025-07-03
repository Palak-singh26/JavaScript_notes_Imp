
// JavaScript Functions – Interview Notes
// --------------------------------------

// Q1. Function declaration
function square(num) {
  return num * num;
}
console.log('Q1 →', square(4)); // 16



//Q2 - what is Function Expression ?
//A function expression is when a function is assigned to a variable. These functions are not hoisted.
// anonymous function
//Q2 - what is Function Expression & Normal function ?
//Function Declaration (Normal Function): Uses the function keyword and is hoisted.
//Function Expression: Assigned to a variable and not hoisted.

const palak = function (num) {  // anonymous function
  return num * num;
};
console.log('Q2 →', palak(5)); // 25



// Q3. First‑class functions
// A language where functions are treated like variables is said to have first‑class functions.
// Functions can be assigned to variable
// Passed as arguments to other functions
// Returned from other functions

function display(fn) {
  console.log('square is', fn(5));
}
display(square); // square is 25




// Q4. IIFE (Immediately‑Invoked Function Expression)
// An IIFE is a function that runs immediately after it is defined.
// Purpose:
// Avoid polluting the global scope
// Create a private scope for variables

(function (num) {
  console.log('Q4 →', num * num); // 36
})(6);



// Q5 Output‑based closure question
// A closure is created when a function "remembers" its lexical scope even when it’s executed outside of that scope.

(function (x) {
  return (function (y) {
    console.log('4.5 →', y, x);   // 2 1
  })(2);
})(1);



// Q6. Function scope
var num1 = 20,
    num2 = 3,
    name = 'Roadside coder';

function multiply() {
  return num1 * num2;
}
console.log('Q6 multiply →', multiply()); // 60

// Nested function with its own scope
function getScope() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + ' scored ' + (num1 + num2);
  }

  return add();
}
console.log('Q6 getScope →', getScope()); // Roadside coder scored 5




// Q7. Output‑based function‑scope question with setTimeout

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log('Q7 →', i); // 0 1 2 3 4 (one per second)
  }, i * 1000);
}



// Q8. Function hoisting
// Function declarations are hoisted to the top of their scope, meaning you can call them before they appear in the code.

functionName();
function functionName() {
  console.log('Q8 inside functionName: e =', e); // undefined
  var e = 5;
  console.log('workers');
}

// Example where var is outside
functionName2();
console.log('Q8 outside: e2 =', e2); // undefined
function functionName2() {
  console.log('workers 2');
}
var e2 = 5;



// Q9. Output‑based hoisting question
var x = 21;
var fun = function () {
  console.log('Q9 →', x); // undefined
  var x = 20;
};
fun();



// Q10. Parameters vs. arguments, rest vs. spread
// Parameters are placeholders in function definitions.
// Arguments are the actual values passed during function calls.
// Rest operator (...) collects arguments into an array
// Spread operator (...) spreads elements of an array

function multiplyNumbers(...nums) {
  console.log('Q10 →', nums[0] * nums[1]);
}
const arr = [5, 6];
multiplyNumbers(...arr); // 30



// Q11. Output‑based rest parameter question
const fn = (a, x, y, ...numbers) => {
  console.log('Q11 →', x, y, numbers); // 6 3 [7, 8, 9]
};
fn(5, 6, 3, 7, 8, 9);



// Q12. Callback function example
// A callback is a function passed as an argument to another function and executed later.

function greeting(name) {
  console.log('hello', name);
}
function processUI(callback) {
  const name = 'User'; // Simulating `prompt`
  callback(name);
}
processUI(greeting); // hello User



// Q13. Arrow functions vs. regular functions
function regularSquare(num) {
  return num * num;
}

const arrowSquare = (num) => {
  return num * num;
};


// 13.1 Implicit return
const implicitSquare = num => num * num;


// 13.2 `arguments` object
function regularFn() {
  console.log('Q13 regular arguments →', arguments);
}
regularFn(1, 2, 3);

const arrowFn = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined
};


// 13.3 `this` binding
let user = {
  username: 'roadsider',
  rc1: () => {
    // Arrow function – lexical `this` (here, global)
    console.log('Q13 rc1 → subscribe to', this.username); // undefined
  },
  rc2() {
    // Regular function – `this` is the object
    console.log('Q13 rc2 → subscribe to', this.username); // roadsider
  }
};

user.rc1();
user.rc2();
