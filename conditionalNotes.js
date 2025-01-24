// These are notes on conditionals

/* At its most basic level, a conditional statement is just "IF -> then"
we will see many more complicated examples, but all of them rely on the idea 
that you are checking if a condition is true, and then doing something 
based on the true/false nature of that condition*/

// Conditional statements rely on some form of comparison.

/* Comparisons in javaScript, and most if not all programming languages 
look like math equations to some extent.
a < b (is a less than b?)
a > b (is a greater than b?)
a == b (is a equal b?)
a <= b (is a less than or equal to b?)
a >= b (is a greater than or equal to b?)
*/

// Example:
// let a = 5;
// console.log(5 < 3);
// console.log(5 > 3);
// console.log(a == 5);
// console.log(a == "5");

// javaScript also has a "===", for "strict equality". This means that 
// it will ask "Is a equal to b AND do a and b have the same data type?"

// console.log(a === "5");

// the last symbol we need to talk about before jumping into actual conditionals
// is "!". "!" means "NOT"
// console.log(a != 3);

// you can compare strings just like you can compare wiht numbers
// console.log("Badin" > "Ross");
/* Rules for string comparison: (assuming > for our comparison)
1. compare the first characters of each string
If the first character of the first string is greater than the first character
of the second string, return True. If it is less than the first character of the 
second string, return False. If they are equal, continue to next step.
2. compare the second characters of each string, as described above
3. continue until either string ends
4. If both strings are equal AND have the same length, return false (they are equal)
5. If one string is longer, that string is greater than the other string
*/
// console.log("R" > "B");
// console.log("b" == "B");

/* Now what we know how comparisons work, we can look at conditonals. */
// AN if statement allows you to "gate" code behind a condition being tru.
if (3 < 5){
    console.log("3 is less than 5");
}

//If you want to make a choice between opitions, you have other structures that 
//are useful.
if (7 < 5){
    console.log("7 is less than 5");
}else{
    console.log("7 is NOT less than 5");
}

// a test for equality. we are going to check if testNUmber is 
// greater than, less than, or equal to 6
// let testNumber = 6;
// if(testNumber > 6){
//     console.log(`${testNumber} is greater than 6.`);
// }else{
//     if (testNumber < 6){
//         console.log(`${testNumber} is less than 6.`);
//     } else {
//         console.log(`${testNumber} is equal to 6.`);
//     }
// }

// as a rule, you want to avoid nested if/else statement. There are two
// better approaches:
//if-else if-else
let testNumber = 9;

if (testNumber < 6){
    console.log(`${testNumber} is less than 6.`);
} else if (testNumber == 6) {
    console.log(`${testNumber} is equal to 6.`);
} else {
    console.log(`${testNumber} is greater than 6.`);
}


//Make a grade generator. Make a variable called TestGrade.
// 0-59 = F
//60-69 =D
//70-79 = C
//80-89 = B
//90-100 = A

let gradeNumber = 89

if (gradeNumber < 0){
    console.log("you are loser you have F");
} else if (gradeNumber < 60) {
    console.log("you are doing okay with a D");
} else if (gradeNumber < 70) {
    console.log("you are almost to B");
} else if (gradeNumber < 80) {
    console.log("Almost passing class you have B");
} else if (gradeNumber < 90) {
    console.log("You are now passing class with A");
}