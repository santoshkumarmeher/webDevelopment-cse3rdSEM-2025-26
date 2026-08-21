// Arithmatic operators

// let a = 10
// let b = 6

// let result = a+b
// let result2 = a-b
// let result3 = a*b
// let result4 = a/b
// let result5 = a%b
// let result6 = a**b

// console.log(result)
// console.log(result2)
// console.log(result3)
// console.log(result4)
// console.log(result5)
// console.log(result6)



// Assignment Operators


// let x = 10
// let y = 10

// x+=5 //x = x+5
// console.log(x)

// x-=5 //x = x-5
// console.log(x)

// x*=5 //x = x*5
// console.log(x)

// x/=5 //x = x/5
// console.log(x)

// x%=5 //x = x%5
// console.log(x)

// y**=5 //y = y**5
// console.log(y)


// Comparision Operators


// let a = '5'
// let b = 5

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)


// console.log(a == b)
// console.log(a === b)

// console.log(a != b)
// console.log(a !== b)




// LOGICAL OPERATOR

// let age = 16

// AND OPERATOR
// console.log(age>=18 && age<=60);

// OR OPERATOR
// console.log(age>=18 || age<=60)


// NOT OPERATOR

// let isLoggedIn = false;
// console.log(!isLoggedIn)



// INCREMENT AND DECREMENT OPERATORS

// let x = 10;
// x++;  // x = x+1
// x++;  // x = x+1
// x--;  // x = x-1
// console.log(x);


// prefix vs postfix

//POSTFIX
// let x = 10; // x =11
// console.log(x);
// let y = x++;  // y = 10

// console.log(x);
// console.log(y);



//PREFIX
// let x = 10; // x =11
// console.log(x);
// let y = ++x;  // y = 11

// console.log(x);
// console.log(y);


//STRING OPERATOR


// let firstName = "Santosh"
// let lastName = "Meher"
// let age  = 27
// let age1  = 'Santosh'

// // let fullName = firstName+" "+lastName
// let fullName = firstName+lastName
// let age2 = age+age1

// // console.log(fullName)
// console.log(age2)


// STRING + NUMBER

// console.log(10+20)
// console.log("10"+20)
// console.log("10"+'20')


// TERNARY OPERATOR

// condition?true:false

// let age = 20
// if (age>=18){
//     console.log("Adult")
// } else {
//     console.log("Minor")
// }

// let result = age>=18? "Adult":"Minor";
// console.log(result)


// NULLISH OPERATOR

let userName=null
let name = userName??"Guest";
console.log(name);