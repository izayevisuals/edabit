// Task:
// Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// My Solution:

// PREP
// Parameters - 'txt' and 'n'
// Return - returns the repeated string 'n' times
// Examples - repeatString("Matt", 3) ➞ "MattMattMatt"; repeatString(1990, 7) ➞ "Not A String !!";
// Pseudocode - if else... .repeat(n)... if not a string => 'Not a string!!'

// Code

function repeatString(txt, n) {
	if(typeof txt === 'string'){
        return txt.repeat(n)
    }else{
        return 'Not a string!!'
    }
}

repeatString("Matt", 3)
// "MattMattMatt"