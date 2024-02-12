// Functions
// Functions are blocks of code which wraps all the small chunks of code into a single block

function sayMyName(){
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

// sayMyName()


// a basic function

/*
function addTwoNumbers(number1, number2){   // parameters (nomenclature)
    console.log(number1 + number2);
}

addTwoNumbers(3, null)   // arguments (nomenclature)

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);
*/



function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in`
}

// console.log(loginUserMessage("Sourabh"))
// console.log(loginUserMessage())


// ... are called as rest and spread operator but it's differentiated based on the use cases
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 500, 1000, 2000));


// object and functions
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

handleObject(user)
/*
handleObject({
    username: "sam",
    price: 399
})
*/



// array and functions
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));