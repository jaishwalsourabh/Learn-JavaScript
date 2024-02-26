// While and Do-while loop

// While syntax
/*
initialization
whhile (declaration) {
    // code block
    
    increment / decrement
}
*/

let index = 0
while (index <= 10) {
    // console.log(`Value of index is: ${index}`);
    index = index + 2;
}


let myArray = ["flash", "wonder woman", "batman", "superman", "aquaman"]

let arr = 0;
while (arr < myArray.length) {
    // console.log(`Value is: ${myArray[arr]}`);
    arr = arr + 1;
}


// Do-while loop

let score = 11;

do {
    console.log(`The Score is: ${score}`);
    score++;
} while (score <= 10);

// check condition later on