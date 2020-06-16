// Write a function printLongestWord that accepts a single argument, an array of strings.
// The method should return the longest word in teh array. In case of a tie,
// the method should return the word that appears first in the array.

// console.log(printLongestWord(['BoJack','Princess','Diane','a','Max','Peanutbutter','big','blob']))
// => "Peanutbutter"
const printLongestWord = (arr) => {
  //length of each el in arr
  let arrOfLength = [];
  // loop through arr to push arr[i].length to arrOfLength;
  for (let i = 0; i < arr.length; i++) {
    arrOfLength.push(arr[i].length);
  }
  // find the max of index arr, which means the el at this index is the longest
  const indexOfLongestWord = arrOfLength.indexOf(Math.max(...arrOfLength));
  // get the longest word with the index above
  const LongestWord = arr[indexOfLongestWord];
  // return that word
  return LongestWord;
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "blob",
  ])
);
