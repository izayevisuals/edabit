// Task: Buggy Code (Part 5)

// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// My Solution:

// PREP
// Parameters - 'number'
// Return - return a number... but the array of the number... 3 => 1, 2, 3
// Examples - printArray(3) ➞ [1, 2, 3] 
// Pseudocode - 


// Code
function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }