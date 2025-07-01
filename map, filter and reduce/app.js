// map, filter and reduce
// 1.map
// map array is use to create new array by applying a function to each one  of the element of the first array
// example
// const nums =  [1,2,3,4];

// const multiplythree = nums.map((nums,i,arr)=>{
//     return nums * 3 ;
// });

// console.log(multiplythree); it will perform like this 1*3+0,2*3+1


//********************************************************************************************************************* */

// 2.filter

// const nums = [1,2,3,4];

// const morethantwo = nums.filter((nums,)=>{
//       return nums > 2;
// })
// console.log(morethantwo);  almost similar to map but function return true to keep the element and false to not keep element



//********************************************************************************************************************* */


// 3.reduce

// const nums = [1,2,3,4];

// const sum = nums.reduce((acc,curr,i,arr)=>{
//       return acc + curr;
// },0);
// console.log(sum);  



//********************************************************************************************************************* */


// 4.polyfill Map()

// Array.prototype.mymap=function (cb) {
//     let temp =[];
//     for(let i =0 ; i < this.length;i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// };

//  const nums =  [1,2,3,4];

// const multiplythree = nums.mymap((nums,i,arr)=>{
//     return nums * 3 ;
// });

// console.log(multiplythree); 
// map give each and every value and modidfies it according to the condition of the callback 


//********************************************************************************************************************* */




// 5.polyfill for fiter

// Array.prototype.myFilter=function (cb) {
//     let temp =[];
//     for(let i = 0 ; i < this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i]);
//     }
//     return temp;
// };

//  const nums = [1,2,3,4];

// const morethantwo = nums.myFilter((nums,)=>{
//       return nums > 2;
// })
// console.log(morethantwo); 
//  but filter returns only those values which satify the condition of callback not each and every element in the form of true and false


//********************************************************************************************************************* */


// 6.polyfill reduce 


// Array.prototype.myReduce=function (cb , initialValue) {
//     var accumulator = initialValue;

//     for(let i = 0 ; i < this.length;i++){
//         accumulator = accumulator?cb(accumulator,this[i],i,this):this[i]
//     }
//     return accumulator;
// };

// const nums = [1,2,3,4];

// const sum = nums.myReduce((acc,curr,i,arr)=>{
//       return acc + curr;
// },0);
// console.log(sum);  
//  if we fails to give initialvalue then accumulator takes first element of array and the current value is assigned the second element ofthe array so we're going to check over here


//********************************************************************************************************************* */



// 7. differ map vs Foreach 

// const arr = [2,5,3,4,7];

// const mapresult = arr.map((ar)=>{
//     return ar + 2; })
// }) we can modidfies the map  map return the value but foreach not return any thing both have differ method or function to perform/
// 


// const foreachresult = arr.forEach((ar,i)=>{
//     arr[i] = ar + 3
// });
// but foreach not return any thing both have differ method or function to perform
// console.log(mapresult,foreachresult,arr); 
// i make chnages in foreach and gic CL arr
// output like map ====  4,7,5,6,9  
// its modifies arr values ==== 5,8,6,7,10




//********************************************************************************************************************* */

//********************************************************************************************************************* */

// output base questions
// 1.return only name of students in captial

// let students =[
//     {name:"piyush",rolnumber:31,marks:80},
//     {name:"meha",rolnumber:34,marks:60},
//     {name:"rani",rolnumber:15,marks:75},
//     {name:"piyu",rolnumber:45,marks:65},
// ];
// // let use map 

// const  names = students.map(stu=>stu.name.toUpperCase());
// // let names = [];
// // for(let i = 0 ; i < students.length;i++){
// //             names.push(students[i].name.toUpperCase());
// // } this is normal example
// console.log(names);



///////////////////////////////////////////////////////////////////////


// 2.return only details of those students who scored more than 60

// let students =[
//     {name:"piyush",rolnumber:31,marks:80},
//     {name:"meha",rolnumber:34,marks:60},
//     {name:"rani",rolnumber:15,marks:75},
//     {name:"piyu",rolnumber:45,marks:65},
// ];

// const details = students.filter((stu)=>stu.marks > 60);
// console.log(details);


//////////////////////////////////////////////////////////////////



// 3. more than 60 marks and rollnumber grater than 15

// let students =[
//     {name:"piyush",rolnumber:31,marks:80},
//     {name:"meha",rolnumber:34,marks:60},
//     {name:"rani",rolnumber:15,marks:75},
//     {name:"piyu",rolnumber:45,marks:65},
// ];

// const details = students.filter((stu)=>stu.marks > 60 && stu.rolnumber > 15);
// console.log(details);/


///////////////////////////////////////////////////////////


// 4.sum of marks of all students


// let students =[
//     {name:"piyush",rolnumber:31,marks:80},
//     {name:"meha",rolnumber:34,marks:60},
//     {name:"rani",rolnumber:15,marks:75},
//     {name:"piyu",rolnumber:45,marks:65},
// ];

// const sum = students.reduce((acc,curr,)=> acc + curr.marks ,0);
// console.log(sum);  


//////////////////////////////////////////////////////////////////////////

// 5.return only names of students who only scored more than students

// let students =[
//     {name:"piyush",rolnumber:31,marks:80},
//     {name:"meha",rolnumber:34,marks:60},
//     {name:"rani",rolnumber:15,marks:75},
//     {name:"piyu",rolnumber:45,marks:65},
// ];

// const  names = students.map(stu=>stu.name.toUpperCase());

// const details = students.filter((stu)=>stu.marks > 60).map((stu)=>stu.name);
// console.log(details);



//////////////////////////////////////////////////////////////////////////////////////

// 6.return total marks of students with marks grater than 60 after 20 marks have been added to those who scored less than 60 

let students =[
    {name:"piyush",rolnumber:31,marks:80},
    {name:"meha",rolnumber:34,marks:60},
    {name:"rani",rolnumber:15,marks:55},
    {name:"piyu",rolnumber:45,marks:50},
];

const totalmarks = students.map((stu) => {
    if(stu.marks < 60){
        stu.marks += 20;
    }
    return stu;
 }).filter((stu)=>stu.marks > 60).reduce((acc,curr)=>acc + curr.marks,0);

console.log(totalmarks);

