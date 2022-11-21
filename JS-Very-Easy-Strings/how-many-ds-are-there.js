// Task: 
// How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

// My Solution:

// PREP
// Parameters - 'sentence'
// Return - return the number of D's in a sentence/string
// Examples - countDs("My friend Dylan got distracted in school.") ➞ 4;
// Pseudocode - toLowerCase, .match


// Code

function countDs(sentence) {
	let newSentence = sentence.toLowerCase()
    let newNewSentence = newSentence.match(/d/g)
    return newNewSentence.length
}

countDs("My friend Dylan got distracted in school.") // 4