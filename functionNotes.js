/*
A function is a set of instructions that are all packaged together.
This is particulary useful if you need to reuse those instructions,
especially if you are reusing them in mulitiple places, or with
various "starting" conditions.

functions name, parameters, arguments

function functionName(parameter1, parameter2, etc){
   code
}

functionName(argument1, argument2, etc);
*/

// make a function that returns a message about favorite animal.

// function favoriteAnimal(animal){
//     return animal + " is my favorite animal!";
// }

// console.log(favoriteAnimal("Panda"));
// console.log(favoriteAnimal("Sea Otter"));
// console.log(favoriteAnimal("River Monster"));
// console.log(favoriteAnimal("Zebra"));

// What happens inside a function is frequently invisible to the outside
// worls. This is referred to in programming as "Scope".
//local scope : within a function
// global score : the main program

// An exmple to demostraite scope
// let test1 = 1
// let test2 = 5

// function add1(num) {
//     test2 = test2 + 1
//     return num + 1;
// }

// console.log(add1(test1));
// console.log(test1);
// console.log(test2);

// To summarize: a function can change a value of a global variable, but
// only if that variable is used, BY NAME, within the function. Variables
// that are passed as arugemnts to the function, will remain unchanged.

// we can make opitional parameters

// function greetings(name = "Mr.Smith"){
//     console.log(`Hello, ${name}`);
// }

// greetings("Mr.Smith");
// greetings("Lucas");
// greetings("Abbie");
// greetings("Sam");
// greetings("Logan");


// Anonymous functions. Anonymous functions are freguently used if a function
//expects to take another function as a parameter. Basically, all this means is that
//the function dosen't have a function name.

// (function(){
//     alert("this is an anonymous function");
// });

// An actual example of how to use an anonymous function
// function logKey(event) {
//     console.log(`You pressed the "${event.key}"`)
// }

// this.addEventListener("keydown", logKey);

// ^^^^^^ how we would normally achieve this goal. But we can use an anonymous
// function instead.

// this.addEventListener("keydown", function (event) {
//     console.log(`You pressed ${event.key}`);
// });

// Another way to creat anonymous function is the "arrow function" syntax
// this.addEventListener("keydown", (event) => {
//     console.log(`You pressed ${event.key}`);
// })

// AN example to examine scope:
// let x = 1;

// function a() {
//     let y = 2;
//     output(x);
//     output(z)
// }

// function b() {
//     let z = 3;
//     output(x);
// }

// function output(value) {
//     console.log(`Value = ${value}`);
// }

// output(x);
// a();
// b();

//FUnctions can have "return values". This is something that the function
// send back to the global scope. some functions don't HAVE a return value.

// function randomLessThan(num) {
//     console.log(Math.floor(Math.random() * num));
// }

// randomLessThan(4);

// // produce a number between 1 and 4
// console.log(randomLessThan(4) + 1)

// IF YOU WANT A FUNCTION TO INTERACT WITH SOMETHING ELSE,
// YOU USALLY NEED A RETURN VALUE

