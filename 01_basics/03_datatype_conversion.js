// Discussing about datatype conversions

let score = "sourabh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN   -> "Not a Number"
//  true => 1; false => 0

let isLoggedIn = "sourabh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "sourabh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
console.log(typeof stringNumber);