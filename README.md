# 🧠 JavaScript `var` vs `let` vs `const` – Interview Notes

This repository contains clear, commented notes with examples to understand the differences between `var`, `let`, and `const` in JavaScript. It's written with interview preparation in mind.

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

