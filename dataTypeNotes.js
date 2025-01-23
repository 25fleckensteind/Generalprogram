// These will be notes on data types.

// there are 8 data types in javaScript
/*
1. numbers (both integers and floating point (decimals))
        - in addition to traditional numbers, the number data type
        includes infinity and NaN (Not a Number)
2. bigInt 
console.log(9007199254740991 + 1);  //90071992547409912
console.log(9007199254740991 + 2);
for very large numbers javaScrript starts to approximate the value.
we can override this with a BigInt, which we form but adding a lowercase 'n'
to the end of the number

3. String
Letters, words, characters, numbers, symbols, that are treated like "text".
*/
console.log(2 + 3);
console.log("2" + "3");
// + with strings produces "concatenation": connecting two symbols one
// after the other
/* Strings are generally formed by encapsulating symbols in quotation
marks. In javaScripts, there are three kinds of qoutation marks that tou can use.

"hello" - double quotes
'hello' - single quotes
`hello` - backticks quotes
*/

console.log("Hello, world!")
console.log('Hello, world')


// If your string contains an apostrophe, use double quotes
// If your string contains a quotation, usse single quotes

// Backticks allow you embed variables into a string
let myName = "Joe";
console.log(`Hello, ${myName}`);

// you can also do math or other operations inside of curly braces:
console.log(`2 + 3 + 23 = ${2 + 3 + 23}`);

// Many programming lanuages have a "char" datatype, representing
// a single character. JavaScript does not.

/* Boolean
Boolean is named for George Boole, who did a lot of work with formal logic
namely, ways to make decisions using true and false statements. The Boolean
datatype can hold only 2 values: true OR false.*/

/* Null
This is a special datatype. It contains only one value: Null.
"Null" in javaScript means "nothing", or "value unknown", "empty"

"Undefined"
This is another special datatype. It contians only one value:
undefined. "undefine" in javaScript means that the value has not
been assigned

let age:  <- here a variable was declared but not defined, so it is "undefined".

our last two datatypes are Objects and Symbols, which are related, 
and are likely beyond the scope of this class.

If you need to know the type of a variable, you can use the typef() function */

console.log(typeof("word"));
console.log(typeof(356));