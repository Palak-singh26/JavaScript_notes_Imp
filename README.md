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

