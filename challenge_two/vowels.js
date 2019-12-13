/*  Counting the vowels in a given string let string_ = 'zeestring'
    let vowels = [a,e,i,o,u]
    Function countVowels takes a string eg string_
    returns an array of length 2 newArray = ['a', 'b']
 */
let vowels = ['a', 'e', 'i','o','u']
let newArray = []

function countVowels(word) {
  for (v in vowels) {
    console.log(vowels[v]);
    if (word.includes(vowels[v])) {
      newArray.push(word);
    }
  }
  console.log(newArray);
  // return newArray[string_[v]];
};
countVowels('excellent string')

// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counte = 0;
//     let newArray = []
//   for (let v of str.toLowerCase()) {
//     if (vowels.includes(v)) {
//       counte++;
//       console.log(newArray);
//       newArray.push(v)
//     }
//   }
// }
// console.log(countVowels('excellent string'));