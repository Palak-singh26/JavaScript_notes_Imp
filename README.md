# 🧠 JavaScript `var` vs `let` vs `const` – Important Notes

This repository contains clear, commented notes with examples to understand the differences between `var`, `let`, and `const` in JavaScript.

---

## 📌 Topics Covered

1. Scope – Global, Function, and Block Scope
2. Shadowing
3. Declaration Rules
4. Declaration without Initialization
5. Re-initialization
6. Hoisting

---

## 📂 File

- `var-let-const.js`: Contains step-by-step explanations and examples with comments.

---

## ✅ Quick Summary

| Feature               | `var`         | `let`        | `const`      |
|-----------------------|---------------|--------------|--------------|
| Scope                 | Function       | Block         | Block         |
| Redeclaration         | ✅ Yes        | ❌ No        | ❌ No        |
| Reassignment          | ✅ Yes        | ✅ Yes       | ❌ No        |
| Hoisted               | ✅ Yes        | ✅ Yes       | ✅ Yes       |
| TDZ (Temporal Dead Zone) | ❌ No     | ✅ Yes       | ✅ Yes       |
| Needs Initialization  | ❌ No         | ❌ No        | ✅ Yes       |

---





# JavaScript Array Methods – map, filter, reduce (with Polyfills)


1. Native use of `map`, `filter`, and `reduce`
2. Hand‑written polyfills for each method
3. `map` vs `forEach`
4. Six practice problems on student data

All examples are self‑contained in *`app.js`*

---

## Quick reference

| Method   | Creates a new array? | Core idea                                   |
|----------|----------------------|---------------------------------------------|
| `map`    | Yes                  | Transform every element                     |
| `filter` | Yes                  | Keep elements that pass a truthy test       |
| `reduce` | No (any value)       | Accumulate to a single result               |

### Method signatures

```js
array.map((value, index, array) => newValue)
array.filter((value, index, array) => Boolean)
array.reduce((acc, value, index, array) => newAcc, initialValue)




# ⚡ JavaScript Functions: Declarations, Expressions, Closures, Hoisting & More
---

## 📚 Topics Covered

1. ✅ Function Declarations vs Expressions  
2. ✅ First-Class Functions  
3. ✅ Immediately Invoked Function Expressions (IIFEs)  
4. ✅ Closures (with output-based examples)  
5. ✅ Scope, `let`, and `setTimeout` behavior  
6. ✅ Function Hoisting  
7. ✅ Parameters vs Arguments, Rest vs Spread  
8. ✅ Callback Functions  
9. ✅ Arrow Functions vs Regular Functions  

All examples are written inside **`app.js`** 

---

## 🧠 Quick Reference Table

| 🧩 Topic                     | 📌 Key Point                                                                                  |
|-----------------------------|----------------------------------------------------------------------------------------------|
| Declaration vs Expression   | Declarations are hoisted, expressions are not.                                               |
| First-Class Functions       | Functions can be assigned to variables, passed as arguments, and returned from other functions. |
| IIFE                        | `(function() { ... })();` Runs immediately, avoids polluting global scope.                   |
| Closure                     | An inner function retains access to outer variables even after the outer function completes. |
| Hoisting                    | Declarations hoisted with full definition; `var` is hoisted as `undefined`.                 |
| Rest vs Spread              | `...args` gathers parameters; `f(...arr)` spreads them.                                     |
| Arrow vs Regular Functions  | Arrow functions have no `this` or `arguments`, and use concise syntax.                      |

---

# 🔄 JavaScript Event Propagation, Bubbling, Capturing & Delegation

## 📚 Topics Covered

| # | Topic |
|---|-------|
| 1 | Event Propagation Overview |
| 2 | Event Bubbling |
| 3 | `event.target` vs `event.currentTarget` vs `this` |
| 4 | Event Capturing / Trickling |
| 5 | Stopping Propagation |
| 6 | Event Delegation |
| 7 | Output‑based Question |
| 8 | Modal Example (click outside to close) |

All runnable examples are collected in **`app.js`** (or embed them directly into an HTML file).

---

## 1. Event Propagation

Event propagation defines **how events travel** through the DOM tree (capture → target → bubble).
It determines the order in which handlers fire when elements are nested.

---

## 2. Event Bubbling

const div    = document.getElementById("Div");
const form   = document.getElementById("Form");
const button = document.getElementById("Button");

div.addEventListener   ("click", () => alert("DIV BLOCK"));
form.addEventListener  ("click", () => alert("FORM BLOCK"));
button.addEventListener("click", () => alert("BUTTON BLOCK"));


# 🔁 JavaScript Currying – Interview Notes & Practice
---

## 📌 Topics Covered

1. What is Currying?
2. Why Use Currying? (Benefits & Use Cases)
3. Difference Between Currying and Partial Application
4. Infinite Currying
5. DOM Manipulation with Curried Functions
6. Custom `curry()` Implementation
7. Output-Based Questions

---

## 📂 File

- `currying.js`: Contains all examples with step-by-step comments and logic flow.

---

## ✅ Quick Summary

| Concept                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Currying                 | Transforming `f(a, b)` to `f(a)(b)` — a function returning another function |
| Arity                    | Number of arguments a function expects                                      |
| Partial Application      | Fixing some arguments of a function and returning a new one                 |
| Infinite Currying        | A function that keeps returning another function until a base case is met   |
| curry() utility          | Custom implementation to transform any multi-arg function to curried form   |

---

## ⚙️ Usage Examples

```js
// Basic currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1)); // 9



# 📘 JavaScript Objects Quick Reference

A short and practical reference for understanding JavaScript objects.

---

## 📌 Topics

* What is an object in JS
* Built-in Objects
* Browser-specific Objects
* Custom Objects
* Deleting Properties
* Computed Properties
* Looping Objects
* Duplicate Keys
* JSON.stringify & JSON.parse
* Spread Operator
* Destructuring
* Object References
* Object Comparison
* Object Mutation
* Shallow Copy
* Deep Copy
* Ways to Clone an Object




# 📘 JavaScript this Keyword Quick Reference


A short and practical guide to understanding the this keyword in JavaScript.


📌 Topics Covered

🔹 What is this in JavaScript

✋ Implicit Binding

✍️ Explicit Binding (call, apply)

🧠 Arrow Functions and this

📦 Method Context (object.method())

⏱ this in setTimeout and Callbacks

🔁 Chaining Methods using this

🔍 Common this Behavior in Objects and Functions





# 🧠 JavaScript `call`, `apply`, and `bind` — Examples & Explanations

This guide demonstrates how `call()`, `apply()`, and `bind()` work in JavaScript with real-world examples and clear explanations.

---

## 📌 Table of Contents

1. [What is `call()`](#1-what-is-call)
2. [What is `apply()`](#2-what-is-apply)
3. [What is `bind()`](#3-what-is-bind)
4. [Q1: Using `call` and `bind`](#4-q1-using-call-and-bind)
5. [Q2: Function Inside Object](#5-q2-function-inside-object)
6. [Q3: `this` with setTimeout](#6-q3-this-with-settimeout)
7. [Q4: `call` in Loop with Objects](#7-q4-call-in-loop-with-objects)
8. [Q5: Append Arrays Using `apply`](#8-q5-append-arrays-using-apply)
9. [Q6: Math.min/Math.max with Apply](#9-q6-mathminmathmax-with-apply)
10. [Q7: Bound Function](#10-q7-bound-function)
11. [Q8: `bind` Chaining](#11-q8-bind-chaining)

---


# 🧠 JavaScript Event Propagation: Bubbling, Capturing & Delegation

A complete explanation with examples on how events travel in the DOM using bubbling, capturing, and delegation. Covers event target handling, stopping propagation, and practical modal behavior.

---

## 📌 Table of Contents

1. [What is Event Propagation?](#1-what-is-event-propagation)
2. [Event Bubbling](#2-event-bubbling)
3. [event.target vs this vs event.currentTarget](#3-eventtarget-vs-this-vs-eventcurrenttarget)
4. [Event Capturing (Trickling)](#4-event-capturing-trickling)
5. [Stop Bubbling or Capturing](#5-stop-bubbling-or-capturing)
6. [Event Delegation](#6-event-delegation)
7. [Q7: Mixed Capture and Bubble Output](#7-q7-mixed-capture-and-bubble-output)
8. [Q8: Modal Close on Background Click](#8-q8-modal-close-on-background-click)

---

## ❓ 1. What is Event Propagation?

**Event propagation** is the process that defines how events flow through the DOM.  
It determines the order in which elements receive the event: from top to bottom (capturing) or bottom to top (bubbling).

---

## ❓ 2. Event Bubbling

**Event bubbling** means the event starts at the target element and moves **upward** through its ancestors.

```js
div.addEventListener("click", () => alert("DIV BLOCK"));
form.addEventListener("click", () => alert("FORM BLOCK"));
button.addEventListener("click", () => alert("BUTTON BLOCK"));
