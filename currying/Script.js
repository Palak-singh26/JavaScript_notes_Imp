//currying 

// Currying is a function that takes one argument at a time and returns a new function expecting
// the next argument. It is the transformation of a function from being callable as f(a, b) 
// into being callable as f(a)(b).

// It is constructed by chaining closures, where each function immediately returns another 
// function that takes the next argument, one at a time.

// Example: Converting f(a, b) into f(a)(b)

function f(a, b) {
    console.log(a, b);
}

// When we convert the above type of function into the form below, it is known as currying:

function f(a) {
    return function(b) {
        return `${a} ${b}`;
    };
}

console.log(f(5)(4)); // Output: "5 4"

// ********************************************************



// Q2 why should we use currying?

// To avoid passing the same variable again and again, to create higher-order functions, 
// and to make your functions pure and less prone to errors.

// Currying is a functional programming technique where a function with multiple arguments 
// is transformed into a series of functions, each taking one argument at a time.

//  Reasons to Use Currying:

//  Code Reusability:
//  Currying allows you to create specialized functions from more general ones.

// Example:

function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // Output: 10

// 2.Function Composition:

// Currying helps in composing multiple functions together to 
// create complex logic in a cleaner way.

// 3.Avoids Repetition:

// You don’t need to pass the same parameters again and again if 
// you’ve already partially applied them.

// 4.Better Readability:

// Code becomes more modular and easier to understand by breaking 
// functions into smaller units.

// 5.Great for Higher-Order Functions:

// Currying is useful when dealing with higher-order functions like
//  .map(), .filter(), or .reduce().

function greet(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = greet("Hello");
console.log(sayHello("palak")); // Output: Hello, palak!



//****************************************************************** */


// Ques 1 - Implement sum(2)(6)(1)


// function sum(a, b, c) {
//     return a + b + c;
// }
// console.log(sum(2, 6, 1)); // Output: 9
//  //simple function

function sum(a){
        return function(b){
             return function(c){
            return a + b + c;
         };
   }
}
console.log(sum(2)(6)(1)); //9



//****************************************************************** */


// Ques 2 - Reusing Variable for logic
// Evaluate a math operation using currying
// Usage examples:
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "substract") return a - b;
            else return "Invalid operation";
        };
    };
}

console.log(evaluate("sum")(4)(2));        // 6
console.log(evaluate("multiply")(4)(2));   // 8
console.log(evaluate("divide")(4)(2));     // 2
console.log(evaluate("substract")(4)(2));  // 2

// Another way to call using stored function
const mul = evaluate("multiply");
console.log(mul(2)(2)); // 4



//****************************************************************** */

//  Ques 3 - Infinite Currying -> sum(1)(2)(3).....(n)


function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}
console.log(add(5)(2)(4)(8)());



//  Step-by-step Explanation:
// This function uses currying and recursion to accumulate values, 
// and returns the final result when it's called with no argument (undefined).

// Let's Evaluate:

// add(5)
// Returns a function that expects b.
// a = 5

// add(5)(2)
// a = 5, b = 2
// Returns add(5 + 2) → add(7)

// add(7)(4)
// a = 7, b = 4
// Returns add(11)

// add(11)(8)
// a = 11, b = 8
// Returns add(19)

// add(19)()
// a = 19, b = undefined → if(b) fails
// Returns a, which is 19


//****************************************************************** */
//  Ques 4 - Currying vs Partial Application


//  This is not currying — it's partial application.
// Partial application means fixing a few arguments of a function and returning a new function with a smaller arity.

function summ(a) {
    return function (b, c) {
        return a + b + c;
    };
}
// We partially applied the value 'a' using sum(10),
// and the returned function still expects two more arguments (b and c).

const y = summ(10);

console.log(y(5, 6)); // Output: 21
console.log(y(3, 2)); // Output: 15

// or, you can call the entire function at once like this:
console.log(summ(20)(1, 4)); // Output: 25


// What does Partial Application do?
// Partial application transforms a function into another function with a smaller arity.
// "Arity" means the number of parameters a function accepts.

// If we rewrite this using currying, it would look like a chain of nested functions (see below):

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Example usage with partial application:
const x = sum(10);     // Returns a function that expects b and c

console.log(x(5)(6));  // Output: 21
console.log(x(3)(2));  // Output: 15

// Or you can call the full curried function directly:
console.log(sum(20)(1)(4)); // Output: 25


//****************************************************************** */

//  Ques 5 - Manipulating DOM

function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    };
}
const updateheader = updateElementText("heading");
updateheader("Hello world ");



//****************************************************************** */
// Ques 6 - curry() implementation
// Converts f(a,b,c)into f(a)(b)(c)


function curry(func) {
    return function curriedfunc(...args) {
        // console.log(args.length,func.length)
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedfunc(...args, ...next);
            };
        }
    };
}


const multiple = (a, b, c, d) => a * b * c * d;
const totalmultiply = curry(multiple);
console.log(totalmultiply(1)(6)(5)(6));


