// Task: ...
// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// My Solution:

// PREP
// Parameters - 'num'
// Return - either integers into strings, or strings into integers
// Examples - intToString(4) ➞ "4"; stringToInt("4") ➞ 4;
// Pseudocode - parseInt(num) and Number(num)

// Code

function intToString(num) {
	return num.toString()
}

function stringToInt(num) {
	return parseInt(num)
}

stringToInt('4') // 4
intToString(4) // '4'