// Control and Login Flow

// const isUserLoggedIn = true
// const temperature = 41

/*
if ( temperature < 50 ) {
    console.log("Less than 50")
} else{
    console.log("Greater than 50")
}
*/

// <, >, <=, >=, ==, !=, ===, !==

/*
const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);
*/


// shorthand notation
// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

/*
if (balance < 500) {
    console.log("less than ")
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less than 750")
} else {
    console.log("balance is 1000")
}
*/


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in successful")
}