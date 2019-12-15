/*  Counting the vowels in a given string let string_ = 'zeestring'
    let vowels = [a,e,i,o,u]
    Function countVowels takes a string eg string_
    returns an array of length 2 newArray = ['a', 'b']
 */
let vowels = ['a', 'e', 'i','o','u'] // defining an array called vowels
let newArray = [] // declaring a new array to house a list of items from a new string

// Declaring a function that takes in word as an argument
function countVowels(word) { 
  for (v in word) { 
    // for each postion in the given string
    if (word.includes(vowels[v])) { 
      // If the word includes any of the vowels
      newArray.push((vowels[v])); 
      // Add the found vowels to the previously empty list
    }
  }
  console.log(newArray);
  // return newArray[string_[v]];
};
countVowels('excellent string')