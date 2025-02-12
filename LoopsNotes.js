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
    let i = 0
    while (i < 3){
        console.log(i);
        i++;  // shorthand for i += i, which is in turn a shorthand for i = i + 1
    }

    /* A single time through a loop is called an iteration. 
    while loops will continue until their condition becomes falsy
    remember, 0 is falsy. */ 

    // i is already 3, because of the ast prior loop
    while (i) {
        console.log("banana")
        i--;
}

/* There is a second flavor of while loop, called a do... while loop
The promary difference between a do... while loop and a while loop, is
that a do... while loop will always execute at least once.

DO... WHILE LOOP STRUCTURE:
do{
    //CODE GOES HERE
} while (condition);
 */

let a = 0;
do{
    console.log(a);
    a += 1;
} while (a < -1);

/* the other kind of loop is the FOR LOOP
For loop are essentially just fancy while loops, their syntax is more
complicated, but they're alsos more commonly used. You are less likely
to set up an infinite loop when using a for loop.

FOR LOOP STRUCTURE:
for (begin; condition; step) {
    // CODE GOES HERE
}

example */
for (let j = 0; j < 5; j++){
    console.log(`j = ${j}`);
}

// for (let i = 0; i != 7; i += 2){
    //console.log(i);
//}

/* with either form of loop, as a general rule, if your condition is going
 to be based on a NUMBER, you probably want to use: <, >, <=, >=.
 ==, != are likely to enable you to "miss" and accidentally make an infinte loop.

 You'll also find that you'll sometimes be off by 1. Frequently the solution to this
 is just to change between < and <= OR > and >=*/