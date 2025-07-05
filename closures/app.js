// Closures & Lexical Scope

// Lexical Scope:
// A scope refers to the current context of your code, which can be either
// globally or locally defined. With the ES6 version of JavaScript:

var username = "rodbdbs";

// Lexical scope in JavaScript means that a variable defined outside a function
// can be accessed inside another function defined after the variable declaration.
// However, the opposite is not true — a variable defined inside a function
// will not be accessible outside that function.

function local() {
  console.log(username); //  Accessible due to lexical scope
}
local();

function local() {
  console.log(username);
}
local(); //this is called lexical scope


function local() {
  var username = "rodbdbs";

}
console.log(username); // you cannot do like this
local();


//global scope 
function hello() {
  var name = "palak";
  //inner scope 2
  function display() {
    //inner scope 
    console.log(name);
  }
  display();

}
hello(); //this is called closures




// What is a closure?
// A closure is the combination of a function bundled together (enclosed) with references to its 
// surrounding state (also known as the lexical environment). In other words, a closure gives a 
// function access to variables from its outer (enclosing) scope, even after that outer function 
// has finished executing.

// In JavaScript, closures are created every time a function is defined — at the time of function creation.

// Example 1: Returning a function that accesses an outer variable
// function makeFunc() {
//   const name = "Mozilla";

//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc(); // Output: Mozilla


// // Example 2: Calling inner function directly from within the outer function
// function makeFunc() {
//   const name = "Mozilla";

//   function displayName(num) {
//     console.log(name, num);
//   }

//   displayName(5); // Output: Mozilla 5
// }

// makeFunc();




// Closure scope chain - 3 main levels:
// 1. Outer function's scope
// 2. Local scope
// 3. Global scope

// Global scope
function makeFunc() {
  const name = "Mozilla"; // Outer function's scope
  function displayName(num) {
    console.log(name, num); // Local scope
  }
  displayName(5);
}

makeFunc();

// Global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // Outer function's scope
      return function (d) {
        // Local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20 - it's an anonymous function

// In the example above, there's a series of nested functions,
// all of which have access to the outer function's scope. In this context,
// we can say that closures have access to all outer scopes.



// Q1 what will be logged to console?

// Q1: What will be logged to the console?

let count = 0;
(function print() {
  if (count === 0) {
    let count = 1; // Shadowing: creates a new block-scoped variable inside the 'if' block
    console.log(count); // Logs 1 (inner 'count')
  }
  console.log(count); // Logs 0 (outer 'count' remains unchanged)
})();

// Explanation:
// The outer count is declared with let count = 0.
// Inside the if block, let count = 1 creates a new block-scoped variable, shadowing the outer one.
// The console.log(count) inside the if block prints 1.
// After the block, console.log(count) refers to the outer count, which is still 0, so it prints 0.




// Q2 write a function that would allow you to do this 


function creatBase(num) {
  return function (innernum) {
    console.log(innernum + num);
  }
}
var addsix = creatBase(6);
addsix(10);//return 16
addsix(21);//return 27


//  Explanation:
// createBase(num) returns a closure — a function that "remembers" the num even after createBase has finished executing.
// addSix is now a function that always adds 6 to whatever number you pass to it.
// This is a classic use case of closures in JavaScript to preserve and use state across function calls.




//Q3 Time optimization 

function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");


// Explanation:
// This is an example of time optimization using closures.
// Instead of recalculating squares on each call, it precomputes and stores them once.
// The returned function forms a closure over the array a, giving it fast, repeated access to the cached values.
// console.time and console.timeEnd are used to measure execution time for performance testing.




// Q4: Block Scope and setTimeout – Output-Based Closure Question

//  Problem with using `var` (function-scoped)
// This will log: 3, 3, 3 — because by the time the `setTimeout` callback runs,
// the loop is already done and `i` has become 3.
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // Logs 3, 3, 3 (after 1s, 2s, 3s)
    }, i * 1000);
  }
}
a();


//  Solution 1: Use `let` instead of `var`
// `let` is block-scoped, so a new `i` is created in each iteration of the loop.
function aUsingLet() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // Logs 0, 1, 2 (after 1s, 2s, 3s)
    }, i * 1000);
  }
}
aUsingLet();


//  Solution 2: Use closure with an inner function to capture the current value of `i`
function aWithClosure() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i); // Logs 0, 1, 2 (correct values via closure)
      }, i * 1000);
    }
    inner(i); // Pass `i` to the inner function to capture its value at each loop iteration
  }
}
aWithClosure();





// Q5 how would you use closure to create a private counter?

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return { add, retrive };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());







// Q6: What is the Module Pattern?

// This IIFE (Immediately Invoked Function Expression) returns an object
// It encapsulates private and public methods — forming a "module"
var module = (function () {

  // Private method — only accessible inside the IIFE
  function privateMethod() {
    console.log('private');
  }

  return {
    // Public method — exposed to outside
    publicMethod: function () {
      console.log('public');
      privateMethod(); // Uncomment this to call private method from inside
    }
  };
})();

// Call public method
module.publicMethod(); // Output: "public"

// module.privateMethod(); // This will throw an error — not accessible from outside




// Q7: Make this run only once

let view;

function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already subscribed");
    } else {
      view = "road";
      console.log("Subscribe to", view);
      called++;
    }
  };
}

let issubscribe = likeTheVideo();

issubscribe(); // Subscribe to road
issubscribe(); // Already subscribed
issubscribe(); // Already subscribed
issubscribe(); // Already subscribed
issubscribe(); // Already subscribed
issubscribe(); // Already subscribed





// Q8: Once Polyfill

function once(fun, context) {
  let ran;

  return function () {
    if (fun) {
      ran = fun.apply(context || this, arguments);
      fun = null;
    }
    return ran;
  };
}

const helloo = once((a, b) => console.log("hello", a, b));

hello(1, 2); // hello 1 2
hello(1, 2); // (no output)
hello(1, 2); // (no output)
hello();     // (no output)
hello();     // (no output)
hello();     // (no output)





// Q9 memoize/caching implementation polyfill

function mymemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argcache = JSON.stringify(args);
    if (!res[argcache]) {
      res[argcache] = fn.call(context || this, ...args);
    }
    return res[argcache];
  };
}



const clusyproduct = (num1, num2) => {
  for (let i = 1; i <= 10000000; i++) { }
  return num1 * num2;
};

const memoizeclumsyproduct = mymemoize(clusyproduct);

console.time("first call");
console.log(memoizeclumsyproduct(9467, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(memoizeclumsyproduct(9467, 7649));
console.timeEnd("second call");




// Q10: Difference between closure and scope
// -----------------------------------------
// - Scope determines which variables are accessible at a given part of code.
//   Types: Global Scope, Local Scope

// - Closure is a function that "closes over" variables from its parent scope,
//   retaining access even after the parent has finished executing.

// - Closures have access to:
//     • Local Scope
//     • Outer Function Scope
//     • Global Scope
