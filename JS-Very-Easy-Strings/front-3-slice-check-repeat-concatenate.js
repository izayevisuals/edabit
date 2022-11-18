// Task: 
// Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. 
// If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// My Solution:

// PREP
// Parameters - "str"
// Return - return a string when its less than 3 characters
// Examples - frontThree("Python") ➞ "PytPytPyt"; frontThree("Cucumber") ➞ "CucCucCuc"; frontThree("bioshock") ➞ "biobiobio";
// Pseudocode - .slice(), .repeat(), .substring()


// Code


function frontThree(str) {
    return str.slice(0,3).repeat(3)
}

frontThree("Cucumber")
// 'CucCucCuc'


// function frontThree(str) {
//     return str.repeat(3).slice(0,3)
// }

// frontThree("Cucumber")
// //'Cuc'
