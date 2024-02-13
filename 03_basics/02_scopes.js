// Scopes in JS

/*
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);
*/


{}      // curly braces are known as scope


//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


/*
Note:- 
1. Avoid using var while creating variables
2. var is a global scope where as let and const both are block scope
3. The scope in console browser is different
4. The scope in code environment using node terminal is different
*/


// Nested scope
function one(){
    const username = "sam alton"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "abc"
    if (username === "abc") {
        const website = "  new-youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ---------- interesting question -------------

addOne(5)
function addOne(num){
    return num + 1
}

// addTwo(5)
const addTwo = function(num) {       // addTwo is called as an expression
    return num + 2
}


/*
Note:- 
1. Nested functions are also called as closures well sometimes
2. When nested functions occur, the child functions can access the variables of a parent function
*/