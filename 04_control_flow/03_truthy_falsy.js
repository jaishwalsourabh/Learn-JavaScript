// Truthy & Falsy

/*
const userEmail = []

if (userEmail) {
    console.log("Got user email!")
} else {
    console.log("Don't have user email!")
}
*/


// falsy values
// false, 0, -0, BigInt - (0n), "", null, undefined, NaN (Not a Number)

// truthy values
// "0", 'false', " ", [], {} - (empty array & object), function(){}

/*
if (userEmail.length === 0) {
    console.log("Array is empty")
}
*/

// Empty object
const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty!")
}

/*

false == 0
true

false == ''
true

false === 0
false

0 == ''
true
*/


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10

// if null comes, it will check the safety

create1 = undefined ?? 15

// console.log(val1);
// console.log(val2);
// console.log(create1);

// val1 = null ?? 10 ?? 20          ---> assigns 10


// Terinary operator
// short form of if else syntax

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


// --- Summary ---
/*
1. all time we can't run or execute code (we need control flows)
2. we can check condition using true and false
3. double and triple equality check (check type)
4. if else statement
5. add, or operator
6. switch statement
7. break and default discussion
8. truthy and falsy value
9. how to check empty array and object
10. nullish coalescing operator
11. terinary operator
12. logical operators and control flow statements completed
*/