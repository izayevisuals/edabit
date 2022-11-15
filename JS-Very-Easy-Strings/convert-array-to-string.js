// Task: 
// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// My Solution:

// PREP
// Parameters - 'arr'
// Return - return an array that's converted to a string
// Examples - arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"; arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef";
// Pseudocode - .toString() and .replace()

// Code

function arrayToString(arr) {
    let newArr = arr.toString()
    let newNewArr = newArr.replace(/,/g, "")
    return newNewArr
}

arrayToString(['A','D','F','G','H','Y','TR','NNHJK'])