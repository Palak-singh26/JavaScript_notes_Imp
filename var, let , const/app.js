// JavaScript Interview Notes: var vs let vs const


// ----------------------------------------------------------
// 1. SCOPE
// ----------------------------------------------------------
// Scope refers to the region of the code where a variable is accessible.
// There are three types of scope in JavaScript:
//  - Global Scope: accessible everywhere.
//  - Function Scope: only accessible inside the function.
//  - Block Scope: only accessible inside a specific block like if, for, etc.

// Example of Global Scope
var a = 5;
console.log(a); // Output: 5

// Example of Function Scope (var)
function bam() {
    var b = 10;
    console.log(b); // Output: 10 (accessible inside the function)
}
// console.log(b); // Error: b is not defined (outside the function)

// Example of Block Scope (let, const)
{
    let x = 2;
    const y = 3;
    console.log(x, y); // Output: 2 3 (accessible only inside the block)
}
// console.log(x, y); // Error: x and y are not defined outside the block




// ----------------------------------------------------------
// 1.1 SHADOWING
// ----------------------------------------------------------
// Shadowing happens when a variable declared in an inner scope
// has the same name as a variable in an outer scope.
// The inner variable temporarily "shadows" or overrides the outer one.

function test() {
    let a = "Palak";

    if (true) {
        let a = "Singh"; // Shadows the outer 'a'
        console.log(a);  // Output: Singh
    }

    console.log(a);      // Output: Palak
}
test();

// Illegal Shadowing Example:
// let cannot be shadowed by var in the same scope
// function test2() {
//     var a = "Palak";
//     let a = "Singh"; // SyntaxError: Identifier 'a' has already been declared
// }

// Legal Shadowing Example (var is function-scoped, let is block-scoped)
function test3() {
    var a = "Palak";
    let b = "Neha";

    if (true) {
        let a = "Singh"; // Legal shadowing: separate block scope
        var b = "Yadav"; // Problem: 'b' is already declared using let in outer scope
        console.log(a);  // Output: Singh
        console.log(b);  // Output: Yadav
    }
}
test3();




// ----------------------------------------------------------
// 2. DECLARATION
// ----------------------------------------------------------
// var can be declared multiple times in the same scope.
// let can only be declared once in the same scope.
// const must be declared and initialized at the same time.

var m;           // Allowed
var m;           // Also allowed

let n;           // Allowed
// let n;        // Not allowed in same scope

// const o;     // SyntaxError: Missing initializer in const declaration


// ----------------------------------------------------------
// 3. DECLARATION WITHOUT INITIALIZATION
// ----------------------------------------------------------
// var and let can be declared without assigning a value.
// const must be initialized at the time of declaration.

var x;           // Valid
let y;           // Valid
// const z;      // Invalid: Must initialize





// ----------------------------------------------------------
// 4. RE-INITIALIZATION (Reassignment)
// ----------------------------------------------------------
// var and let can be reassigned.
// const cannot be reassigned after initialization.

var r = 5;
r = 6;
console.log(r);  // Output: 6

let s = 10;
s = 15;
console.log(s);  // Output: 15

const t = 20;
// t = 25;       // Error: Assignment to constant variable




// ----------------------------------------------------------
// 5. HOISTING
// ----------------------------------------------------------
// JavaScript moves variable and function declarations to the top
// of their scope before code execution — this is called "hoisting".

// Example with var:
console.log(p);  // Output: undefined (because declaration is hoisted)
var p = 1;

// Example with let and const:
console.log(q);  // ReferenceError: Cannot access 'q' before initialization
let q = 2;

// In the creation phase, let and const are hoisted but not initialized.
// They exist in the "Temporal Dead Zone" (TDZ) until the line where they are declared.

// Example of hoisting inside a function:
function abc() {
    console.log(a, b, c); // Output: undefined, ReferenceError, ReferenceError
    var a = 10;
    const b = 20;
    let c = 30;
}
abc();
