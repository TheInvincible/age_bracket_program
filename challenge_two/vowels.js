/*  Counting the vowels in a given string let string_ = 'zeestring'
    let vowels = [a,e,i,o,u]
    Function countVowels takes a string eg string_
    returns an array of length 2 newArray = ['a', 'b']
 */
let vowels = ['a', 'e', 'i','o','u']

function countVowels(string_) {
  for (let v in vowels) {
    console.log(vowels[v]);
    if (string_[v] = vowels) {
      newArray = []
      newArray.push(string_[v])
    }
  }
  console.log(newArray);
  // return newArray[string_[v]];
};
countVowels('excellent string')