// Task: 
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// My Solution:

// PREP
// Parameters - 'n'
// Return - returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// Examples - integerBoolean("100101") ➞ [true, false, false, true, false, true]; integerBoolean("10") ➞ [true, false]
// Pseudocode - replace 0 w/ false, replace 1 w/ true, turn it into an array, split the words true and false


// Code

function integerBoolean(n) {
	let newN = n.replace(/0/g, false)
    let newNewN = newN.replace(/1/g, true)

    return newNewN.split()
}