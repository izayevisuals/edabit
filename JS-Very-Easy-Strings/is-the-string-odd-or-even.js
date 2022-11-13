// Task: 
// Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// My Solution:

// PREP
// Parameters - 's'
// Return - return true if even, return false if odd
// Examples - oddOrEven("apples") ➞ true; oddOrEven("pears") ➞ false;
// Pseudocode - if else statement... if length is divisible by 2... then even???

// Code

function oddOrEven(s) {
	if(s.length % 2 === 0){
		return true
	}else{
		return false
	}
}

oddOrEven('sup')