// call bind  AND APPLY
//  what is call  -----> The call() method is a built-in JavaScript function that allows you to
//  explicitly set the value of this when calling a function. 
// func.call(thisArg, arg1, arg2, ...); 

// function sayName() {
//     console.log(`My name is ${this.name}`);
// }

// const person = {
//     name: "Palak",
// };

// sayName.call(person); // Output: My name is Palak



// var obj = { name: "palak" };

// function sayhello(age) {
//     return "hello " + this.name + " is " + age;
// }
// console.log(sayhello.call(obj, 24));






// Apply  --->The apply() method is similar to call() — it allows you to call a function with a specific this value
//  — but the difference is how arguments are passed.
// func.apply(thisArg, [arg1, arg2, ...])



var objs = {name:"palak"};

function sayhello(age,profession){
     return "hello " + this.name + " is " + age +  " and is an " + profession;
}
console.log(sayhello.apply(objs,[24,"web developer"]));







// what is  bind  -->The bind() method does not immediately call the function.
// Instead, it returns a new function with a permanently bound this value
// let boundFunc = func.bind(thisArg, arg1, arg2, ...)

var obj = {name:"palak"};

function sayhello(age,profession){
     return "hello " + this.name + " is " + age +  " and is an " + profession;
}
const bindfunc = sayhello.bind(obj);
console.log(bindfunc (24,"web dev"));
console.log(bindfunc (44,"soft dev"));




// Q1 output base

// const persons = { name: "palak"};

// function sayhi(age){
//     return `${this.name} is ${age} `
// }

// console.log(sayhi.call(person,24));
// console.log(sayhi.bind(person,24));

// const personss = { name: "palak"};

// function sayhi(age){
//     return `${this.name} is ${age} `
// }

// console.log(sayhi.call(person,24));
// const bindfuncs = sayhi.bind(person);
// console.log(bindfuncs(24));





// Q2 call with function inside object

const age = 10;

var person = {
    name : "palak",
    age: 20,
    getage: function(){
        return this.age;
    },
};

var person2 = {age: 24};
var result = person.getage.call(person2);
console.log(result);

console.log(person.getage.bind(person2)());

// 🔍 Explanation:
// person.getage() normally returns 20, because this refers to person.

// call(person2) calls the getage function immediately, but sets this to person2, so this.age becomes 24.

// bind(person2) creates a new function with this set to person2, and then it's called using () — again returning 24.



// Q3 

var status = "😎";

setTimeout(()=>{
     const status = "😍";


     const data = {
        status: "🌈",
        getstatus(){
            return this.status;
        },
     };

 console.log(data.getstatus());  
     console.log(data.getstatus.call(this));

},0);  //output:🌈 😎 

// Explanation:
// data.getstatus()
// → Here, this refers to data
// → So it returns data.status = "🌈"

// data.getstatus.call(this)
// → call(this) sets this to outer this (which is global object in non-strict mode)
// → In browser, global object is window
// → So this.status returns the global status value








// Q4  call printanimal such that it prints all animal in object

const animals = [
    {species : "Lion",name:"king"},
    {species : "whale",name:"queen"},
];

function printanimal(i){
    this.print = function (){
          console.log(" # " + i + " " + this.species+ " :" + this.name);
    };
    this.print();
}
for(let i = 0; i < animals.length; i++ ){

    printanimal.call(animals[i],i);
}


// call(animals[i], i):
// printanimal is executed with:
// this set to the current animal object (animals[i])
// i passed as the index
// So this.print gets added to that animal object
// And when called, it prints using:
// this.species → from the animal
// this.name → from the animal
// i → index




// Q5 append an array to another array  -- concat


const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements); // It takes each element from 'elements' and pushes them one by one into 'array'
console.log(array); // 👉 ["a", "b", 0, 1, 2]

//  Explanation:
// array.push(...) normally adds elements to the end of array.
// apply(array, elements) spreads the elements array as individual 
// arguments to push.




// Q6  using apply to enhance built-in function

// find min/max number in an array

const number = [5, 6, 7, 8, 9];

console.log(Math.max.apply(null, number)); // 👉 9
console.log(Math.min.apply(null, number)); // 👉 5

//  Explanation:
// Math.max() and Math.min() don’t accept arrays directly.
// apply(null, number) spreads the array into individual arguments:
// Math.max(5, 6, 7, 8, 9)
// Math.min(5, 6, 7, 8, 9)
// null is passed as the this value (not used by Math.max/min).



// Q6 bound  function


function f() {
    console.log(this);
}

let user = {
    g: f.bind(null),
};

user.g(); // 👉 logs: null (in strict mode) OR global object (in non-strict mode)

//  Explanation:
// f.bind(null) creates a new function with this permanently set to null.
// So user.g() doesn't use user as this — it uses the bound value null.


// Q7  bind  chain

function f() {
    console.log(this.name);
}

f = f.bind({ name: "john" }).bind({ name: "anna" });
f(); // 👉 "john"

//  Explanation:
// The first bind locks this to { name: "john" }.
// The second bind has no effect — because once a function is bound, it cannot be re-bound.