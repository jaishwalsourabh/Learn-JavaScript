// Comparison on operators

/* simple comparisons */
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/* -- Here typescript won't allow this type of comparison!
console.log("02" > 1);
console.log("2" > 1);
*/

// comparison with null
// Here values gets converted.
console.log(null > 0);      // NaN or 0
console.log(null == 0);     // equality check!
console.log(null >= 0);     // comparison

// Note:-
// 1. the reason is that, equality check '==' and comaparisons '>, <, >=, <=' will work differently
// 2. comparisons convert null to a Number, treating it as 0
// 3. that's why null >= 0 is true and null > 0 is false

// comparison with undefine
console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false

// Note:- avoid these type of confusion code and write clean readable code!!

// strict check!!
console.log("2" === 2);

// 1. it will check with '==='
// 2. it will check your value with datatype