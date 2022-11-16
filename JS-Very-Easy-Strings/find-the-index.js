// Task: 
// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// My Solution:

// PREP
// Parameters - 'arr' and 'str'
// Return - reture the index of the string
// Examples - findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2; findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1;
// Pseudocode - 

// Code

function findIndex(arr, str) {
    return arr.indexOf(str)
}

findIndex(["hi", "edabit", "fgh", "abc"], "fgh")