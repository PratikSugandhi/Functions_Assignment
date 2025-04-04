//  Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

// Recursive function to calculate the factorial of a number
const factorial = (n) => {
    if (n === 0 || n === 1) { // Base case: factorial of 0 or 1 is 1
        return 1;
    } else {
        return n * factorial(n - 1); // Recursive case
    }
};

// Test the factorial function with different inputs
console.log(factorial(0));  // Output: 1
console.log(factorial(1));  // Output: 1
console.log(factorial(5));  // Output: 120
console.log(factorial(7));  // Output: 5040
console.log(factorial(10)); // Output: 3628800
