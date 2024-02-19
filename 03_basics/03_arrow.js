// This Keyword & Arrow Functions

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website.`);
    console.log(this);
  },
};

// context = value
// if the context is changed, then it will get updated

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// Whenever we run simply 'this', it will give as empty object
// console.log(this);

// Browser object = window object



/*
function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai();
*/


// Arrow functions
const chai = () => {
    let username = 'hitesh'
    console.log(this);
}

// chai()

// Arrow function syntax
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));
*/


// Arrow function implicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// object in arrow function
const addTwo = (num1, num2) => ({username: "hitesh"})

// no need to write return keyword for implicit function
// need to write return keyword for explicit function

console.log(addTwo(3, 4));


// const myArray = [2, 4, 5, 6, 7]

// myArray.forEach()