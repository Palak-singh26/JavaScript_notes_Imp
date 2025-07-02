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
