// Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

// Curry function that takes a function as an argument
const curry = (fn) => {
    // Create a closure to collect arguments
    const curried = (...args) => {
        if (args.length >= fn.length) {
            // When enough arguments are provided, call the original function
            return fn(...args);
        } else {
            // Otherwise, return a new function to collect the next argument
            return (...next) => curried(...args, ...next);
        }
    };
    return curried;
};

// Test the curry function with a function that adds two numbers
const add = (a, b) => a + b;

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function by passing arguments one at a time
console.log(curriedAdd(5)(10));  // Output: 15
