// Task: 
// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// My Solution:

// PREP
// Parameters - "arr"
// Return - an array of strings to an array of numbers
// Examples - ["1", "3", "3.6"] ➞ [1, 3, 3.6]; toNumberArray(["91", "44"]) ➞ [91, 44]
// Pseudocode - toArray()...?

// Code

function toNumberArray(arr) {
	return arr.map(Number)
}

toNumberArray(["1", "3", "3.6"]) // [1, 3, 3.6]