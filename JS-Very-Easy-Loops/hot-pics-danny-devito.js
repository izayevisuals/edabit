// Task: 
// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

// My Solution:

// PREP
// Parameters - 'str'
// Return - return "Safe watching!"
// Examples - preventDistractions("vines that butter my eggroll") ➞ "NO!"; preventDistractions("How to ace BC Calculus in 5 Easy Steps") ➞ "Safe watching!"
// Pseudocode - if... else...

// Code

function preventDistractions(str) {
	if(str.includes('anime', 'meme', 'vines', 'roasts', 'Danny DeVito')){
        return 'NO!'
    }else if(str.includes('meme')){
        return 'NO!'
    }else if(str.includes('vines')){
        return 'NO!'
    }else if(str.includes('roasts')){
        return 'NO!'
    }else if(str.includes('Danny DeVito')){
        return 'NO!'
    }else{
        return 'Safe watching!'
    }
}