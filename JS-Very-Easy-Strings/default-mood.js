// Task:
// Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// My Solution:

// PREP
// Parameters - 'mood'
// Return - return a sentence with the current mood
// Examples - moodToday("happy") ➞ "Today, I am feeling happy"; moodToday() ➞ "Today, I am feeling neutral";
// Pseudocode - if else statement


// Code

function moodToday(mood) {
	if(mood){
        return "Today, I am feeling " + mood
    }else{
        return "Today, I am feeling neutral"
    }
}
