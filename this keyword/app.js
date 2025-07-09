// this keyword in JavaScript

// There are two types of object binding in JavaScript:
// 1. Implicit binding
// 2. Explicit binding

// 🔹 Implicit binding applies when you invoke a function using dot notation (object.method()).

// 🔹 In explicit binding, we manually set the value of this using:
// call()
// apply()
// bind()

// Q1. Example
var cal = {
  total: 0,

  add(a) {
    this.total += a;
    return this;
  },

  subtract(a) {
    this.total -= a;
    return this;
  },
};

const results = cal.add(10); // Adds 10 to total

this.a = 5;
function getParam() {
  console.log(a); // `a` is accessed from global context
}
getParam(); // Output: 5 


// Q2. example
let users = {
  name: "Palak",
  age: 19,
  childObj: {
    newName: "Palak Singh",
    getDetail() {
      console.log(this.newName, "and", this.name);
    },
  },
};

users.childObj.getDetail(); // Output: "Palak Singh and undefined"

// Q3. Example 

let user = {
  name: "hello",
  age: 1,
  getDetail: () => {
    console.log(this); // Arrow function
  },
};

user.getDetail(); // Output: window (or global object), not the `user` object




// Q1: What will be the output of the following code?

const userss = {
    firstName: "palak",
    getName() {
        const firstName = "palak singh";
        return this.firstName;
    },
};

console.log(userss.getName()); // Output: "palak"

// Explanation:
// Inside the object user, the method getName defines a local variable firstName, but it also uses this.firstName.
// this.firstName refers to the property on the user object, not the local variable.
// So the output will be "palak".




// Q2 what is the result of accessing its ref ? why ?

function makeover() {
    return {
        name: "palak",
        ref() {
            return this;
        },
    };
}

let stu = makeover();
console.log(stu.ref().name); // Output: "palak"

// Explanation:
// The makeover function returns an object with a property name and a method ref.
// When we call stu.ref(), it invokes the ref method using dot notation (stu.ref), so:
// this inside ref() refers to the stu object.
// Therefore, stu.ref().name → user.name → "palak".



// Q3: What will be the output?

const stud = {
  name: "palak singh",
  logMsg() {
    console.log(this.name);
  },
};

setTimeout(function () {
  stud.logMsg();
}, 1000);  // palak singh3

//  Explanation:
// setTimeout is used to delay the function execution by 1000ms (1 second).
// Inside the callback, you're calling stud.logMsg() at the time of execution, 
// so this inside logMsg refers to the stud object



//  Q4: Arrow Function vs Regular Method in Object

const usser = {
  name: "palak singh",

  greet() {
    return `Hello, ${this.name}!`; // Works as expected
  },

  farewell: () => {
    return `Goodbye, ${this.name}!`; // Won't work correctly
  },
};

console.log(usser.greet());     // Output: Hello, palak singh!
console.log(usser.farewell());  // Output: Goodbye, undefined!

//  Explanation:
// greet() is a regular method – this refers to the object (user).
// farewell() is an arrow function – this refers to the outer (global) 
// scope, not user, so this.name is undefined.




// // Q5   create an object calculator
let calculator = {
  read() {
    this.a = +prompt("Enter a:", 0);
    this.b = +prompt("Enter b:", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum()); // Output: sum of a + b
console.log(calculator.mul()); // Output: product of a * b

// * Notes
// +prompt(...) converts the input to a number.
// this.a and this.b store values directly in the calculator object.



//  Q6 — this Context in Function Callback vs Arguments Object
// 📌 Part 1
var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn(); // Regular function call
  },
};

object.method(callback); // Output: 4

// fn() is called as a regular function, 
// so this refers to the global object (window in browsers).
// this.length is window.length, which is 4 (from the var length = 4 above).

// 📌 Part 2
var length = 4;

function callback() {
  console.log(this.length);
}

const objects = {
  length: 5,
  method(fn) {
    arguments[0].call(arguments); // Now 'this' refers to arguments
  },
};

objects.method(callback, 2, 3); // ✅ Output: 3

// Here, arguments[0]() means callback() is called through the arguments object.
// So this refers to arguments, and arguments.length is 3 (because 3 arguments were passed).



// Q7 IMPLEMENT CAL OBJECT


const calc = {
  total: 0,

  add(a) {
    this.total += a;
    return this;
  },

  multiply(a) {
    this.total *= a;
    return this;
  },

  subtract(a) { 
    this.total -= a;
    return this;
  }
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total); // Output: 30


// calc.add(10) → total = 10
// .multiply(5) → total = 10 × 5 = 50
// .subtract(30) → total = 50 − 30 = 20
// .add(10) → total = 20 + 10 = 30

