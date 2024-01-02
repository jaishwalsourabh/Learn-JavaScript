// Summary of datatypes

// Datatypes are of two types:-
// 1. Primitive datatype
// 2. Non-Primitive / Reference datatype

// 1. Primitive are call by value datatypes
// 2. Reference are call by reference datatypes

// Note:- The main difference between both the datatypes is:- how the data is been stored and how we can access it, so they have categorized into 2 parts!

// Note:- JS is dynamically typed language

/*
Primitive Datatype:- These datatypes will give you a copy of that data to work on it
(7 types):- String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

/*
Reference Datatype:- These datatypes will give you direct access to the original data
(3 types):- Arrays, Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
name: "hitesh",
age: 22,
}

const myFunction = function(){
console.log("Hello world");
}

console.log(typeof anotherId);

// To study more about datatypes
// https://262.ecma-international.org/5.1/#sec-11.4.3