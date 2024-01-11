// Dates in JS

/*
creation of date using new object

let myDate = new Date()

console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toString())
console.log(typeof(myDate))

*/

// Note:- Adding custom values to date and time

// let myCreadtedDate = new Date(2024, 0, 11)
// console.log(myCreadtedDate.toDateString())

// let myCreadtedDate = new Date(2024, 0, 11, 14, 40)
// console.log(myCreadtedDate.toLocaleString())

let myDate = new Date("01-11-2024")
console.log(myDate.toLocaleString());

// Timestamps
let myTimeStamp = Date.now()

// Note:- the output will come in milliseconds
console.log(myTimeStamp);

// console.log(myDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000))

// Getting Month and Day in numbers
/*
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
*/

// Setting custom Date and Time
const newDate = new Date();
/*
newDate.toLocaleString('default', {
weekday: "long",
timeZone: ""
});
*/