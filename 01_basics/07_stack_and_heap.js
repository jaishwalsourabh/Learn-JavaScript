// Stack and Heap memory in JS

/*
Stack
1. Primitive datatypes i sstored in stack memory
2. Will get a copy of memory (copy value)

Heap
1. Reference datatypes is stored in heap memory
2. Will get reference of that memory (original value)
*/

// How Stack memory work?
let myYoutubeName = "hiteshYT.com"
let anotherName = myYoutubeName

// console.log(myYotubeName)
// console.log(anotherName)


// How Heap memory works?
let userOne = {
    email: "john@google.com)",
    upi: "123abcd@ybl"
}

let userTwo = userOne
userTwo.email = "andrew@google.com"

console.log("UserOne email ID is:-", userOne.email)
console.log("UserTwo email ID is:-", userTwo.email)