// LOOPS
// console.log("Hello Student")


// FOR LOOP 


// SYNTAX
// for (initialisation,condition,updation){

// }

// for (let i = 1; i <= 5;i++){
//     console.log(i)
// }


// EVEN NUMBER
// for (let i = 1; i <= 10;i++){
//     if (i%2 === 0){
//         console.log(i)
//     }
//     // console.log(i)
// }


// ODD NUMBER

// for (let i = 1; i <= 10;i++){
//     if (i%2 !== 0){
//         console.log(i)
//     }
//     // console.log(i)
// }


// SUM of first 10 natural numbers
// let sum = 0;
// for (let i = 1; i <= 10;i++){
//     sum = sum+i
// }
// console.log(sum)



// WHILE LOOP 


// SYNTAX
// while(condition){
//     // statements
// }


// let i = 2;
// while (i<=5){
//     console.log(i);
//     i=i+2;
// }




// DO WHILE LOOP 


// SYNTAX

// do{
//     // statements
// }while(consition);



// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i<=0);





// FOR OF 

// // Traditional for loop
// let fruits = ["Apple","Banana","Mango"];
// for (let i = 0; i<= fruits.length;i++){
//     console.log(fruits[i]);
// }


// for of loop in ARRAY
// let fruits = ["Apple","Banana","Mango"];
// for (let fruit of fruits){
//     console.log(fruit);
// }

// for of loop in STRING
// let myName = "SANTOSH"
// for(let letter of myName){
//     console.log(letter)
// }





// FOR IN 

let student = {
    stdName : "Santosh",
    age : 20,
    course : "JavaScript"
}

// for (let key in student){
//     console.log(key);
// }

// for (let key in student){
//     console.log(student[key]);
// }



// NESTED LOOP

// for (let i = 1;i <= 3; i++){
//     for (let j = 1; j<= 3; j++){
//         console.log(i,j)
//     }
// }


// Pattern Printing
// *
// **
// ***

for (let i = 1;i <= 3; i++){
    let pattern = "";
    for (let j = 1; j<= i; j++){
        pattern +="*";
    }
    console.log(pattern);
}



// HOME WORK
// ***
// **
// *


