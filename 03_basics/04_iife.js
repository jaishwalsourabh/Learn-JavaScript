// Immediately Invoked Function Expressions (IIFE)

//
// 1. Function gets immediately executed
// 2. Sometimes there is a problem due to the pollution of the global scope, so to remove the pollution from the variables of that global scope, we have used IIFE.

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();



// ()()
// first parenthesis = function definition
// second parenthesis = function execution call



// ( () => {
//     console.log(`DB CONNECTED TWO`);
// } )();



((name) => {
  // unamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("sourabh");



// Note:-
/*
1. **Global Scope Pollution:** When too many variables are declared in the global scope (the outermost scope of a program), it can lead to conflicts and unintended consequences. This is known as global scope pollution.

2. **IIFE (Immediately Invoked Function Expression):** An IIFE is a JavaScript function that is defined and immediately executed. It helps encapsulate variables within its own scope, preventing them from polluting the global scope. This is achieved by wrapping the function in parentheses and immediately invoking it.

3. **Pollution Mitigation:** By using IIFE, variables declared within the function are limited to its scope and do not affect the global scope. This modular approach helps organize code, avoids naming conflicts, and enhances code maintainability.
*/
