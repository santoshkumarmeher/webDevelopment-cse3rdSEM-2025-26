// function

// simple function


// Function Declaration
// function hello(){  
//     console.log("Hello Students");

// }

// Function call
//  hello();
 

// Function with parameter
// function hello(name ){  
//     console.log("Hello " + name );
// }

// hello("Santosh");

// Function with multiple parameter

// function hello(name,age ){  
//     console.log("Hello " + name + " You are "+ age);
// }

// hello("Santosh",27);
// hello("Rahul",25);


// function with return

// function add(a,b){
//     return a+b;
//     // console.log(a+b);
// }
// let result = add(1,5);
// // console.log(add(1,2));
// let bonus = result + 3;


// console.log(bonus)


// return STOP the function

// function test(){
//     console.log("A");
//     return;
//     console.log("B");
// }

// test();



// Function Expression

// let greet = function(){
//     console.log("hello");
// }
// greet();


// Arrow Functions

// function add(a,b){
//     return a+b;
// }

// const add = (a,b) =>{
//     return a+b;
// }

// console.log(add(10,20));

// Basic Structure
// const functonName = (parameters) =>{
//     // code
// }


// Arrow function with one parameter

// const square = num => {
//     return num*num;
// }
// console.log(square(5));
// console.log(square(10));
// console.log(square(15));

// const square = (num) => num*num;
// console.log(square(5));


// default parameter

// function greet(name='Student'){
//     console.log("hello "+name);
// }
// greet("Santosh");
// greet();


// Scope of variable in functions
// let globmsg = "Hello Student"  //Global variable
// function test(){
//     let msg = "hello"; //local Variable
//     console.log(msg);
// }
// console.log(glonmsg);
// test()


// Functions with conditions

// function checkAge(age){
//     if (age>=18){
//         console.log("Adult");
//     }else{
//         console.log("Minor");
//     }
// }

// checkAge(20);


// Function with Loop

// function printNum(){
//     for (let i = 1; i<= 10; i++){
//         console.log(i);
//     }
// }


// printNum();


//Function calling another function
// function start(){
//     greet();
//     console.log("Welcome to javascript Class");
// }

// function greet(){
//     console.log("Hello");
// }


// start();


