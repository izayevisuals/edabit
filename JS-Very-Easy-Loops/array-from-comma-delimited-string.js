// Task: 
// Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.


// My Solution:

// PREP
// Parameters - 'str'
// Return - a string to an array
// Examples - toArray("watermelon, raspberry, orange") ➞ ["watermelon", "raspberry", "orange"]; toArray("a, b, c, d") ➞ ["a", "b", "c", "d"]
// Pseudocode - 


// Code

function toArray(str) {
	let newStr = str.split(',')
    return newStr
}

