// Task: ...
// Format I: Template String
// Write a template string according to the following example:

//const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

// My Solution:

// PREP
// Parameters - 'a', 'b', 'c'
// Return - return the 'template' with the a, b, and c template literals
// Examples - const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."
// Pseudocode - template literals

// Code

function format(a, b, c) {
	const template = `Their names were: ${a}, ${b} and ${c}.`
	return template
}

format("Isabel", "Izzy", "Isa")