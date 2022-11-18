// Task: 
// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

// My Solution:

// PREP
// Parameters - 'str'
// Return - true if the string contains any spaces
// Examples - hasSpaces("hello") ➞ false; hasSpaces("hello, world") ➞ true
// Pseudocode - if else... .includes()


// Code
function hasSpaces(str) {
	if(str.includes(" ")){
        return true
    }else{
        return false
    }
}

hasSpaces("hello, world")
// true