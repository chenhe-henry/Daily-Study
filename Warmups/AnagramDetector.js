// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// In other words, given: "listen" and["enlists" "google" "inlets" "banana"]the program should return "inlets".

//     Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagramDetector = (string, arr) => {
  let newString = string.split("").sort().join("");
  let newArr = [];
  let anagramArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").sort().join(""));
    if (newArr[i] === newString) {
      anagramArr.push(arr[i]);
    }
  }
  return anagramArr;
};

console.log(anagramDetector("haha", ["haah", "cnice", "ahha"]));
console.log(
  anagramDetector("listen", ["enlists", "google", "inlets", "banana"])
);
