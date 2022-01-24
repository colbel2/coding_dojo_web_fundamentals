// Global scope variable - can be used anywhere. It has been created outside of any function.
var x = 15;

// Funtions what are they even?
// A funtion is a series of steps to accomplish a task.

// Function declaration
// Start with the keyword function, followed by the name of your function, then parentheses (wheter there are parameters or not), then the curly braces at the bookends of the code block. Inside the codeblock place the code you'd like.
function setx(newValue) {
    x = newValue;
}

console.log(x); // --> 5
// To execute a function we call it by name.
setx(15); // no output
console.log(x); // --> 15

var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hellow there");

}

console.log(x); // --> 5
// The value of a function is whateverit returns
var result = addToX(-10); // --> no output
console.log(result); // --> -5
console.log(x); // --> 5


// Challenge 3

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

