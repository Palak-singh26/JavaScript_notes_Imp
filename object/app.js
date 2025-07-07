// where things in js is object

// An object is a collection of properties and a property is an associate between a name (a key) and a CSSMathValue. 
// A property value can be a function in which case the propert is known as a method.

// type of object 
// 1. Built-in Objects

// Type	Example	Description
// Object	{ key: 'value' }	Base type for all objects
// Array	[1, 2, 3]	Ordered collection
// Function	function() {}	Callable object
// Date	new Date()	Handles date and time
// RegExp	/abc/	Regular expressions
// Error	new Error('msg')	Error handling



//  2. Browser/Environment-specific Objects

//  Type	Example	Description
// Window	window	Global browser window object
// Document	document	Represents HTML document
// HTMLElement	document.getElementById	DOM element objects
// Console	console.log()	For debugging/logging
// Event	click, keydown	Represents user/browser events


//  3. Custom Objects

//   function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// const myCar = new Car("Toyota", "Camry");



// object in js

// Example 1: Deleting a property from an object

const userInfo = {
  name: "Palak Singh",
  age: 19,
  "like this video": true, // key with spaces must be in quotes
};

delete userInfo["like this video"];  // Deletes the property with the key "like this video"
console.log(userInfo);               // Output: { name: 'Palak Singh', age: 19 }





//  Example 2: Using `delete` on a local variable (no effect)

const func = (function (a) {
  delete a;  //  Has no effect — `delete` only works on object properties, not local variables
  return a;
})(5);

console.log(func); // Output: 5




//  Example 3: Dynamic property names using computed property syntax

const property = "firstName";
const name = "Palak Singh";

const user = {
  [property]: name, // same as { firstName: "Palak Singh" }
};

console.log(user); // Output: { firstName: 'Palak Singh' }




// Example 4: Looping over object keys

const useri = {
  name: "Palak Singh",
  age: 19,
  isTotallyAwesome: true,
};

for (const key in useri) {
  console.log(key);  // Logs: name, age, isTotallyAwesome
}




//  Example 5: Looping over object values

const useria = {
  name: "Palak Singh",
  age: 19,
  isTotallyAwesome: true,
};

for (const key in useria) {
  console.log(useria[key]);  // Logs: Palak Singh, 19, true
}



// ****************************************************************************/
// ❓ Q1: What will be the output?

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);
// Output: { a: 'three', b: 'two' }

//  Explanation:
// When an object contains duplicate keys, the last occurrence overrides the previous one.
// In this case, the key `a` is defined twice:
// - First as `a: "one"`
// - Then as `a: "three"`
//
// JavaScript will keep the last definition (`a: "three"`), so the final object is:
// { a: "three", b: "two" }

// **************************************************************************************/

// ❓ Q2: Create a function `multiplyByTwo(obj)` that multiplies 
// all numeric property values of an object by 2.

let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2
    }
  }
}

console.log(nums);
// ✅ Output:
// { a: 200, b: 400, title: 'my nums' }

//  Explanation:
// The function `multiplyByTwo` iterates through each key in the object.
// If the value is a number, it multiplies it by 2.
// Non-numeric properties (like strings) remain unchanged.


// *************************************************************************/

// Q3: What is the output of the following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //

// Explanation:
// When you use an object as a key in another object (a[b]),
//  JavaScript automatically converts the key to a string.
// Both b and c are objects. When they are used as keys, 
// they get converted to the string "[object Object]".



// *****************************************************************************/

// Q4 what json .strigify and json.parse?

const username = {
  name: "palak",
  age: 19,
};

// Convert object to JSON string
const strobj = JSON.stringify(username);
console.log(strobj);
// Output: {"name":"palak","age":19}
// Note: In this form, we cannot directly access object properties like strobj.name

// Convert the JSON string back to a JavaScript object
console.log(JSON.parse(strobj));
// Output: { name: "palak", age: 19 }


//  Storing and Retrieving from localStorage
const userHello = {
  name: "palak",
  age: 19,
};

// Convert the object to a string before storing
const str = JSON.stringify(userHello);
localStorage.setItem("test", str);

// Retrieve from localStorage and convert it back to object
const retrievedUser = JSON.parse(localStorage.getItem("test"));
console.log(retrievedUser);
// Output: { name: "palak", age: 19 }


// *****************************************************************************/

// Q5 whats the output

console.log([..."layana"]);   // Output:  { admin: true, name: "palak", age: 19 }

//  Explanation:
// The ... is called the spread operator.
// It is used to expand or "spread" iterable elements like strings, arrays, or objects.
// In this case, "layana" is a string, which is an iterable.
// The spread operator breaks it into individual characters and wraps them into a new array.


// *****************************************************************************/


// Q6: What will be the output?

const users = { name: "palak", age: 19 };
const admin = { admin: true, ...user };

console.log(admin);


// Explanation:
// The ...user is the spread operator, which copies all key–value pairs from the user object into the admin object.
// The admin object ends up containing all properties from both user and itself.

// *****************************************************************************/


// Q7: What will be the output?

const setting = {
  username: "palak",
  level: 19,
  health: 40,
};

const data = JSON.stringify(setting, ["level", "health"]);
console.log(data);

// JSON.stringify(obj, replacerArray) allows you to filter which 
// properties should be included in the JSON string.
// In this case, only "level" and "health" are included.
// "username" will be ignored.

// *****************************************************************************/


// Q8
const shape = {
  radius: 10,

  diameter() {
    return this.radius * 2;
  },

  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());   // 20
console.log(shape.perimeter());  // NaN

//Explanation:
// diameter() is a regular function, so this refers to the object shape.
// ➤ this.radius is 10, so 10 * 2 = 20.

// perimeter is defined as an arrow function.
// ➤ In arrow functions, this is not bound to the object, it’s lexically scoped (usually refers to window or undefined in strict mode).
// ➤ So this.radius is undefined, and 2 * Math.PI * undefined = NaN.




// *****************************************************************************/

// Q9: What is destructuring in an object?

let usesr = {
  name: "pa",
  age: 19,
  fullName: {
    first: "palak",
    last: "Singh",
  },
};

const names = "sin"; // local variable, unrelated to object
const { fullName: { first } } = usesr;
console.log(first);  // Output: "palak"

//  Explanation:
// Object destructuring is a syntax that lets you extract specific properties from an object into variables.
// You can also perform nested destructuring, like we did here with fullName.first.



// Q10: What is the output?

function getItem(fruitList, favoriteFruit, ...args) {
  // Rest parameter (...) should always be the last formal parameter
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItem(["banana", "apple"], "pear", "orange"));

// Explanation:
// fruitList gets ["banana", "apple"]
// favoriteFruit is "pear"
// ...args collects any remaining arguments → ["orange"]
// The return statement spreads them into a new array:
// → ["banana", "apple", "orange", "pear"]



// Q11: What is the output?

let e = { greeting: "Hey!" };
let d;

d = e;                // Both 'c' and 'd' now reference the same object in memory
e.greeting = "Hello"; // Modifying the object via 'c'

console.log(d.greeting); // Output: "Hello"




// Q12: What is the output?

console.log({ a: 1 } == { a: 1 });   // false
console.log({ a: 1 } === { a: 1 });  // false

// In JavaScript, objects are compared by reference, not by value.
// { a: 1 } == { a: 1 } creates two different objects in memory.
// Even though their contents are the same, they are not the same reference, so the comparison returns false.




// Q13

let person = { name: "palak" };
const members = [person];
person.name = null;

console.log(members);

//  Explanation:
// person is an object.
// members contains a reference to the same person object.
// When you set person.name = null, you're modifying the original object.
// Since members[0] still references that same object, the change is reflected inside the array.



// Q14: What is the output and why?

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();        // 20  – uses a *fresh clone* of `value`
multiply();        // 20  – fresh clone again (original `value` still 10)
multiply(value);   // 20  – mutates the *same* `value` object (10 → 20)
multiply(value);   // 40  – mutates the same object again (20 → 40)




// Q15: What is the output and why?

function changeAndReference(person) {
  // Mutates the original object
  person.age = 25;

  //  Reassigns the local parameter to a new object
  person = {
    name: "John",
    age: 50,
  };

  return person; // returns the new object
}

const personObj = {
  name: "Alex",
  age: 30,
};

const personObj1 = changeAndReference(personObj);

console.log(personObj);  // { name: "Alex", age: 25 }
console.log(personObj1); // { name: "John", age: 50 }




// Q16 what is shalow copy and deep copy

// Shallow Copy
// A shallow copy creates a new object, but it copies only references to 
// nested objects, not the actual nested objects themselves.
// So if the nested object is changed, it affects both the original and the copied object.
const original = {
  name: "Palak",
  details: {
    age: 19,
  },
};

const shallow = { ...original }; // or Object.assign({}, original)

shallow.details.age = 20;

console.log(original.details.age); // 20 (also changes in original)


//  Deep Copy
// A deep copy creates a completely independent copy, including all 
// nested objects. Changes to the deep copy do not affect the original.
const originals = {
  name: "Palak",
  details: {
    age: 19,
  },
};

const deep = structuredClone(originals);

deep.details.age = 21;

console.log(originals.details.age); // 19 (original stays safe)








// Q17 how to deep copy / clone an object

let hello = {
  say: "hii robi",
  aftersay: "byeeee",
};
//  const objclone =  Object.assign({},hello); one way to clone any object
// const objclone = JSON.parse(JSON.stringify(hello)); another way 
const objclone = { ...hello };
objclone.aftersay = "toddles";

console.log(hello, objclone);






