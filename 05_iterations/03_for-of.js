// High Order Loops and Functions 

// Note:- These are array specific loops

// ["", "", ""]
// [{}, {}, {}]



// For-of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each character is: ${greet}`);
}


// Maps

// Maps are very similar to object, key-value pairs, also maps have unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FRN', "France")
map.set('GER', "Germany")
map.set('ARG', "Argentina")
map.set('IN', "India")

// console.log(map);

// array destructre
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTAV',
    'game3' : 'FC24'
}

for (const [key, value] of myObj) {
    // console.log(key, ':-', value)
}

// Note:- using for-of loop we can iterate on maps but not on objects
// For objects we have different methods
