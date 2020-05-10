// Given an arbitrary ransom note string and another string containing letters from all the magazines,
// write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// You may assume that both strings contain only lowercase letters.

var canConstruct = function (ransomNote, magazine) {
  let ransomArr = [];
  let magazineArr = [];
  for (j = 0; j < ransomNote.length; j++) {
    ransomArr.push(ransomNote[j]);
  }
  for (x = 0; x < magazine.length; x++) {
    magazineArr.push(magazine[x]);
  }
  console.log(ransomArr);
  console.log(magazineArr);
  const check = (ransomArr, magazineArr) =>
    ransomArr.every((el) => magazineArr.includes(el));
  return check(ransomArr, magazineArr);
};
// canConstruct("a", "b");
// canConstruct("aa", "ab");
// canConstruct("aa", "aab");
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
