// Task: 
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// My Solution:

// PREP
// Parameters - 'n'
// Return - returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// Examples - integerBoolean("100101") ➞ [true, false, false, true, false, true]; integerBoolean("10") ➞ [true, false]
// Pseudocode - if... else...


// Code

function integerBoolean(n) {
	if (n.includes('1')){
        return 'true'
    }else if(n.includes('0')){
        return 'false'
    }
}