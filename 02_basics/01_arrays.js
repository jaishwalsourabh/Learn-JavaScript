// Arrays

// Declare an array
const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);

const myHeros = ['Ironman', 'Captain America']
// console.log(myHeros);

// Creating an array using new object
const myArr2 = new Array(1, 2, 3, 4)

// Array Methods
/*
myArr.push(6)
myArr.push(7)
myArr.pop()
*/

// unshift method -> can add any element to the first position
// myArr.unshift(9)

// shift method can remove the first position elemnet
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// join method adds all the element into a string
const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof(myArr));
// console.log(newArr);
// console.log(typeof(newArr));

// Slice & Splice Methods
// Slice
console.log("Orginal Array", myArr)

const myArray1 = myArr.slice(1, 3)
console.log(myArray1);
console.log("Slice", myArr);

// Splice
const myArray2 = myArr.splice(1, 3)
console.log("Splice", myArr);
console.log(myArray2);

// Note:-
// 1. slice returns a copy of the array but it doesn't affect the original array.
// 2. splice changes the original array by removing, replacing, or adding values and returns the affected values / original array.
