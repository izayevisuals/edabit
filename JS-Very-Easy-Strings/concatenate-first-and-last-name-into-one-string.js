// Task: ...
// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// My Solution:

// PREP
// Parameters - 'firstName' and 'lastName'
// Return - return fn and ln as strings in 'ln, fn'
// Examples - concatName("John", "Doe") ➞ "Doe, John"; concatName("First", "Last") ➞ "Last, First"
// Pseudocode - use '+' to add the strings in a certain order???

// Code

function concatName(firstName, lastName) {
	return lastName + ', ' + firstName
}

concatName('Izzy', 'Calabig')