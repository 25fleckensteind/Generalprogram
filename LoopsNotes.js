/* Notes on Loops in javaScript */

/* Loops are a great way for us to repeat a set of steps.
If you have something you want to do multiple times in a row, or
until something happens, loops are an ideal solution

There are two general flavors of loops in programming:
-While loop
-For loop

WHILE LOOPS:
while (Conditions){
    //CODE GOES HERE
    }

    This code will repeat as long as that condition is true.

    example */ 
    // let i = 0
    // while (i < 3){
    //     console.log(i);
    //     i++;  // shorthand for i += i, which is in turn a shorthand for i = i + 1
    // }

    /* A single time through a loop is called an iteration. 
    while loops will continue until their condition becomes falsy
    remember, 0 is falsy. */ 

    // i is already 3, because of the ast prior loop
//     while (i) {
//         console.log("banana")
//         i--;
// }

/* There is a second flavor of while loop, called a do... while loop
The promary difference between a do... while loop and a while loop, is
that a do... while loop will always execute at least once.

DO... WHILE LOOP STRUCTURE:
do{
    //CODE GOES HERE
} while (condition);
 */

// let a = 0;
// do{
//     console.log(a);
//     a += 1;
// } while (a < -1);

/* the other kind of loop is the FOR LOOP
For loop are essentially just fancy while loops, their syntax is more
complicated, but they're alsos more commonly used. You are less likely
to set up an infinite loop when using a for loop.

FOR LOOP STRUCTURE:
for (begin; condition; step) {
    // CODE GOES HERE
}

example */
// for (let j = 0; j < 5; j++){
//     console.log(`j = ${j}`);
// }

// for (let i = 0; i != 7; i += 2){
    //console.log(i);
//}

/* with either form of loop, as a general rule, if your condition is going
 to be based on a NUMBER, you probably want to use: <, >, <=, >=.
 ==, != are likely to enable you to "miss" and accidentally make an infinte loop.

 You'll also find that you'll sometimes be off by 1. Frequently the solution to this
 is just to change between < and <= OR > and >=*/

 /* You can skip elements of the for loop declaration. For example

 let i = 0;

 for(; i < 3; i++) {
    Console.log(i);
}

********************

for (let i = 0; i < 3;){
    console.log(i++)
}

**************
let i = 0

for (; i < 3; ){
    console.log(i)
}
    \
**************
for(;;){
    //THIS IS AN INFINITE LOOP
}

*/

/* BREAK as a command
break is command that will immediately exit you from a loop,
and advance to the next part of your code. You can put breaks in 
as failsafes ife ou think you might create an infinite loop.*/

//Example 1: sum number from the user
// let sum = 0;
// while (true){
//     let value = +prompt("entera number", '');

//     if(!value){
//         break;
//     }

//     sum += value;
// }
// console.log(`sum = ` + sum);

// Eample 2: add numbers from 1 to a given value WITH a timeout function
// let sum = 0;
// let max = +prompt("Add the numbers from 1 to what?");
// let now = Date.now();
// console.log(now);

// for (let i = 1; i <= max; i++){
//     sum += i;

//     if (Date.now() > now + 1000){
//         console.log("This took too long");
//         break;
//     }
// }

// console.log(sum);

// /* CONTINUE as a command
// continue is like a "lighter" version of break. Instead of ejecting you 
// out of the loop, it just skips to the end of the current iteration */
// //Example: print just the odd numbers from 1 to 20:

// // for (let i = 0; i < 21; i++) {
// //     if (i % 2 == 0){
// //         continue;
// //     }
// //     console.log(i);
// // }


// // Summary:
// // THREE KINDS OF LOOP: For, While, D0...While
// // A Do...While loop is the only one of these that MUST execute at least once
// // break - is a key word that will eject you from the loop all together
// // continue - skip the rest of the current interation




// /* ARRAYS
// IN programming, an array is a collection of values. Specifically, it's an 
// "ordered" collection of values.

// let arrayName = [item1, item2, item3, item4];

// to make an empty array, there are two approaches:
// let fakearray1 = new Array();
// let fakeArray2 = [];
// */

// let fruits = ["Apples", "bananas", "Canteloupes", "Durians", "Lychees"];
// console.log(fruits);

// console.log(fruits[3]); // "lemon" , b/c we start indexinf from 0

// fruits[3] = "Pineapple";
// console.log(fruits);

// // Add strawberries
// fruits[5] = "Strawberries"
// console.log(fruits);

// // find out how long an array is(how many elements are in it?);
// console.log(fruits.lenth);

// fruits[fruits.length] = "Dragonfruits";
// console.log(fruits);

// fruits[fruits.length] = "Blueberries";
// console.log(fruits);

// /* an array can store elements of any type. including, mixing types
// in the same array*/

// let exampleArray2 = ["Apple", 35, true, function () {console.log(`hello`);}, "arra"];

// console.log(exampleArray2[0]);
// console.log(exampleArray2[1]);
// console.log(exampleArray2[3]);

/* do math or other operations with the values in an array */
// Function to calculate the distance between 2 points on the X-y plane.
// dist = sqrt((x2 - x1)^2 + (y2 - y1)^2
// let obj1 = [3,5];
// let obj2 = [7, 11];

// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2);
// console.log(dist);

// let prime = [2, 3, 5, 7, 11, 13, 17];
// let i = 0;
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
//}

// console.log(primes[-1]);  // = undiefined
// console.log(primes.at(-1));
//Array methods
//.pop() - finds the last element of the array, returns it, and deletes
//         it from the array

// console.log(primes);
// console.log(primes.pop());
// console.log(primes);

//Here is a code snippet to find the sum of all primes
//less than 20

// let sum = 0;
// while (primes.length > 0){
//     sum += primes.pop();
//     console.log(primes, sum);
// }

// console.log(sum);


// the inverse of .pop() is .push()
// .Push() adds an element to the end of the array.

// let fruits = ["Apple", "Banana", "canteloupe"];

// console.log(fruits);

// fruits.push("watermelon");

// console.log(fruits);

//The problem with pop and push, is that you can only modify the end of the array.
//if you want to modify the BEGINNING of the array, you need different methods:

//Shift() - shift is pop, but at the beginning.
// console.log(fruits.shift());
// console.log(fruits);

// unshift() - is push, but at the beginning
// fruits.unshift("apricot");
// console.log(fruits);

// push and unshift can add multiple elements at once
// fruits.push("orange", "Peach");
// fruits.unshift("lemon", "Pineapple");

// console.log(fruits);

// Using loops with arrays.
// here's an "old" style of printing all of the array values:

// for (let i = 0; 1 < fruits.length; i++){
//     console.log(fruits[i]);
// }

// there is a different kind of way to do this, using a
// for... of loop:

// for (let fruit of fruits) {
//     console.log(fruits);
// }

/* Something to knote about arrays:
array.length is returnig the value of the last index + 1, it is nor actually 
counting the number of values in the array */

// let grades = ["A", "A", "B", , "B", "A"];
// console.log(grades);
// console.log(grades.length);

// let badArray = [];
// badArray[314] = "pie";
// console.log(badArray.length);
// console.log(badArray);

/*multidimensional Arrays 
A multidimesional array, is an array that is, in turn,
made up of more arrays. 
*/

// an array holding XY coordinates of 5 points:
// 3,4 and 1,2 and 9,15 and 37,11 and 215,1
let coordinates = [
    [3,4], 
    [1,2], 
    [9,15], 
    [37,11], 
    [215,1]
]

console.log(coordinates[4][0]);

coordinates[4][0] = 21;

console.log(coordinates);