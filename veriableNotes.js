// 1/8/2025
// this is a comment
// we will usa a combination of comments and code to build up our notes.

//we start by declaring a variable
// let myName = "Jeff";
// console.log (myName);
// myName = "Steve";
// console.log (myName);

// 1/15/2025
// Here is another way to declare a variable
// const e = 2.71828;
// console.log(e);
// e = 3.1415;
// console.log(e);
//^^^^ this throws an error, because you can't change the value of a const.

// a third way to create a variable
// var pi = 3.1415;
// console.log(pi);
// pi = e;
// console.log(pi);

// var and let are pretty interchangeable, but canst makes variables that
//can't be changed

//This was an example to show how 
// let total = 0;
// let i = 0
// while (i < 1001){
//     total = total + i;
//     i = i + 1;
// }
// console.log(total);


// 1/16/2025
// we'll start looking at numbers and math below:
// JavaScript can add
console.log(23+97);

let sumOfSix = 44444444 + 12345678910;
console.log(sumOfSix);


//you can do math in the consle including using variables from
//the JavaScript file you ran.

//simulation of calculating percent arror
const actual = 57;
let prediction = actual - 13;
let percentage = prediction / actual;
conole.log(percentageError);


/* starts a multiline, or clock, comment */
/*
lucas
is 
a 
smelly boy

pee u /*


/* Mathematical operators in javaScript
+ -> addition
- -> Subtraction
* -> MUltiplication
/ -> Division
** -> exponentitation (3**2 = 9)
% -> modulus

javascript will work like a scientific calculator, and apply
order of operations (modulus happens after division and 
BUT before addition and subtraction)

unlike many other programming languages, javaScript only has 1 number type
(which is number)
other languages freguently have at least 2 number types, most commonly
int - integers
float - floating point numbers (decimals)
*/

// 1/17/2025
//  there are some rules for variables names in javaScript:
//  1. The name may contain only letters, digits, or symbols '$' and '_'
//  2. The first character may NOT be a digit
//  3. They cannot be "reserved" words. (you can't name a variable 'let', 'const' 'console.log')
