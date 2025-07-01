// interview quetions 

// var  vs let vs const 

// 1 . scope
//  its a certian reigon of a program ,where a define variable exists and cab be recognized and beyond that it cannot be recognaized
// so there can be multiple types of scope
// there may be global scope , block scope ,functional scope 
// if there is any scope without block then it will be globle scope 
// function bam ({  this is function scope }
// {  this is block scope}
// for example  
// var a = 5;   console.log(a);  var is functional scope but let and const are block scope  
// {
//     let a = 2;
//     console.log(a);  same with const  
// }

//********************************************************************************************************************* */


// 1.1 shadowing 

// function test() {
//     let a = "paLAK";
     
//     if(true){
//         let a = "singh";
//         console.log(a);    }

//         console.log(a);
// }
// test(); it will print the singh and then palak it will shadowed the let a variable 
// if we try let variable with var variable then it called as illigal, but can do opposite of this function like we can call var variable by let 
// example  
// function test() {
//     var a = "paLAK";
//     let b = "neha";
     
//     if(true){
//         let a = "singh";
//         var b = "yadav";
//         console.log(a); 
//         console.log(b);
//        } 
    
//     }
// // test(); 


//********************************************************************************************************************* */


// 2.declaration

// var a;  we can redeclare the var as may time want;
//  if we try to redeclare the let variable the it will show error;
// const a; same for const but give some other error;
// but if you use a block code and one global code the it wil be completely fine but not with const


//********************************************************************************************************************* */

// 3.declaration without initialisation

// var a; fine; will can declare the variable without any initialsation but not with const 
//  let can also be declare without initialisation;
// var a;let a; const a;

 //********************************************************************************************************************* */            

// 4. re-initialisation;

// var a = 5;
// a=6; console.log(a); it fine with var variable

//  let a = 5;
//  a =6; console.log(a) it also fine with let but not with const it will show error 


//********************************************************************************************************************* */


// 5. hoisting

// in creation phase js engine moves your variable and function declarations to top of your code and this is called as hosting;
// console.log(count);
// var count = 1; the output will we undifine because its  in js and how js see this code 
// like 
//  var count;
//  console.log(count);
//  count=1; js see the code like this  its with var 

// console.log(count);  
// let count = 1;   
// var count2 =2;
// it will say thAT we connot accccess the count before initialsation

// function abc() {

//     console.log(a,b,c);

//     const b =20;
//     let c= 30;
//     var a =10;
    
// }
// abc();
// it will print  because console.log is before the var a if it will be after var a then it will print the value