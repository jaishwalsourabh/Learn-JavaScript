// Iterations

// for loop syntax -> can iterate on values
/*
for (initialization; condition check; increment/decrement){
    code block
}
*/


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("Start 5 numbers are printed!")
    } 
    else if (element == 10) {
        // console.log("The number loop is completed!")
    }
    // console.log(element);
}

// not able to access (block scope)
// console.log(element);


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and Outer loop: ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j);   // multiply
    }
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// Keywords
// 1. break
// 2. continue

/*
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value of index is: ${index}`);
}

// break will break the iteration loop once the value is detected
*/

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        continue;
    }
    // console.log(`Value of index is: ${index}`);
}

// continue will skip the iteration of value 5.