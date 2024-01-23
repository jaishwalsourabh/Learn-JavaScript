// singleton
// Object.create

const mySym = Symbol("key1")

// object literals

const JsUser = {
    name: "Sourabh",
    "full name": "Sourabh Jaishwal",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "sourabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*

// Accessing the object data

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
*/


// Object.freeze method

JsUser.email = "sourabh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sourabh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());