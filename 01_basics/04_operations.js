// Operations

let value = 3
let negValue = -value
// console.log(negValue);

/*
Types of operations

console.log(2+2);   // (+) plus (add)
console.log(2-2);   // (-) minus (subtract)
console.log(2*2);   // (*) multiply
console.log(2**3);  // (**) power of
console.log(2/3);   // (/) division
console.log(2%3);   // (%) remainder (modules)
*/

let str1 = "hello"
let str2 = " sourabh"

let str3 = str1 + str2
// console.log(str3);

/*
Note:- There are some rules in the javascript for operations

console.log("1" + 2); // it will join as string + number (12)
console.log(1 + "2"); // it will join as number + string (12)
console.log("1" + 2 + 2); // first will consider as string and then join (122)
console.log(1 + 2 + "2"); // here case is different - it will add up and then join (32)

Note:- If a number comes under quotes = will be a string
String will join or concatenate it
Number will do addition
*/

/*
Note:- this type of example code is good for solving the questions,
not for real scenarios and projects, avoid writing it!!

console.log( (3 + 4) * 5 % 3);

/

// Note:- also avoid writig=ng this confusing code
/*  console.log(+true);
console.log(+"");  */

// avoid this type of assignment operation*
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// prefix and postfix (learn more about this concept)
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study more about conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion