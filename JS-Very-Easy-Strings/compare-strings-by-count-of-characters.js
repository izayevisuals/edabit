// Task: 
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// My Solution:

// PREP
// Parameters - 'str1' and 'str2'
// Return - return 2 strings and see if they atch eachother's character length, if they do then return true, if not then false.
// Examples - comp("AB", "CD") ➞ true; comp("ABC", "DE") ➞ false

// Pseudocode - if else()... and use .length?

// Code

function comp(str1, str2) {
	if(str1.length == str2.length){
		return true
	}else{
		return false
	}
}

comp('hi', 'yo')