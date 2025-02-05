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
let test1 = 1
let test2 = 5

function add1(num) {
    test2 = test2 + 1
    return num + 1;
}

console.log(add1(test1));
console.log(test1);
console.log(test2);

// To summarize: a function can change a value of a global variable, but
// only if that variable is used, BY NAME, within the function. Variables
// that are passed as arugemnts to the function, will remain unchanged.

// we can make opitional parameters

function greetings(name = "Mr.Smith"){
    console.log(`Hello, ${name}`);
}

greetings("Mr.Smith");
greetings("Lucas");
greetings("Abbie");
greetings("Sam");
greetings("Logan");