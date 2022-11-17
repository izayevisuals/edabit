// Task: 
// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// My Solution:

// PREP
// Parameters - 'str'
// Return - return the string without the first letter
// Examples - newWord("apple") ➞ "pple"; newWord("cherry") ➞ "herry"
// Pseudocode - use substring() to pick out certain characters from that string


// Code

function newWord(str) {
    return str.substring(1)
}

newWord("apple") // 'pple'