// JavaScript Array Methods: map, filter, reduce

// 1. map ----------------------------------------------------
// Creates a new array by applying a function to every element.
const nums = [1, 2, 3, 4];

const multipliedByThree = nums.map((n, i, arr) => n * 3);
console.log( multipliedByThree); // [3, 6, 9, 12]


// 2. filter -------------------------------------------------
// Keeps elements that satisfy the callback condition.
const moreThanTwo = nums.filter(n => n > 2);
console.log( moreThanTwo); // [3, 4]


// 3. reduce -------------------------------------------------
// Reduces the array to a single value (sum in this example).
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// 4. Polyfill for map --------------------------------------
Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};
console.log(nums.myMap(n => n * 3)); // [3, 6, 9, 12]


// 5. Polyfill for filter -----------------------------------
Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
console.log('5. myFilter →', nums.myFilter(n => n > 2)); // [3, 4]


// 6. Polyfill for reduce -----------------------------------
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator =
      accumulator !== undefined
        ? cb(accumulator, this[i], i, this)
        : this[i];
  }
  return accumulator;
};
console.log(
  '6. myReduce →',
  nums.myReduce((acc, curr) => acc + curr, 0)
); // 10


// 7. map vs forEach ----------------------------------------
const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map(n => n + 2); // returns new array

arr.forEach((n, i) => {
  arr[i] = n + 3;                      // mutates original array
});

console.log('map vs forEach ', mapResult, arr);
// mapResult: [4, 7, 5, 6, 9]
// arr after forEach: [5, 8, 6, 7, 10]


// 8. Practice problems -------------------------------------
const students = [
  { name: 'piyush', roll: 31, marks: 80 },
  { name: 'meha',  roll: 34, marks: 60 },
  { name: 'rani',  roll: 15, marks: 75 },
  { name: 'piyu',  roll: 45, marks: 55 },
];


// 8.1 Names in uppercase
const namesUpper = students.map(s => s.name.toUpperCase());
console.log('8.1 uppercase names →', namesUpper);



// 8.2 Students scoring > 60
const aboveSixty = students.filter(s => s.marks > 60);
console.log('8.2 marks > 60 →', aboveSixty);


// 8.3 Score > 60 AND roll > 15
const complexFilter = students.filter(
  s => s.marks > 60 && s.roll > 15
);
console.log('8.3 marks > 60 & roll > 15 →', complexFilter);


// 8.4 Total marks of all students
const totalMarks = students.reduce((acc, s) => acc + s.marks, 0);
console.log('8.4 total marks →', totalMarks);


// 8.5 Names of students scoring > 60
const namesAboveSixty = students
  .filter(s => s.marks > 60)
  .map(s => s.name);
console.log('8.5 names > 60 →', namesAboveSixty);


// 8.6 Add 20 to marks < 60, then total of those now > 60
const adjustedTotal = students
  .map(s => (s.marks < 60 ? { ...s, marks: s.marks + 20 } : s))
  .filter(s => s.marks > 60)
  .reduce((acc, s) => acc + s.marks, 0);
console.log('8.6 adjusted total →', adjustedTotal);
