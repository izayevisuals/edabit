// Task: 
// Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// My Solution:

// PREP
// Parameters - name
// Return - "Hello, my Love!" or "Hello, " + name + "!";
// Examples - greeting("Matt") ➞ "Hello, Matt!"; greeting("Helen") ➞ "Hello, Helen!"
// Pseudocode - 

function greeting(name) {
    if(name === 'Mubashir'){
        return "Hello, my Love!"
    }else{
        return "Hello, " + name + "!";
    }
  }

  greeting('Izzy')