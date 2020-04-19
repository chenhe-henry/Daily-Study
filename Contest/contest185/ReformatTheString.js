// Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit.That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

//     Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
//     Example 2:

// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.
//     Example 3:

// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.
//     Example 4:

// Input: s = "covid2019"
// Output: "c2o0v1i9d"
// Example 5:

// Input: s = "ab123"
// Output: "1a2b3"

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and / or digits.
var reformat = function (s) {
  let final = [];
  let result = "";
  let numInS = 0;
  let numArr = [];
  let letterInS = 0;
  let letterArr = [];
  //check how many nums and letters in the string

  if (s.length === 1) {
    result = s;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (!isNaN(s[i])) {
        numArr.push(s[i]);
        numInS += 1;
      } else if (/[a-zA-Z]/.test(s[i])) {
        letterArr.push(s[i]);
        letterInS += 1;
      }
    }
    console.log(
      "There are " +
        numInS +
        " nums and " +
        letterInS +
        " letters in this string"
    );
    //check if it is only one type in the string
    if (numInS === s.length || letterInS === s.length) {
      result = "";
    } //check if the difference of two types of data less than 2
    else if (numInS - letterInS >= 2 || numInS - letterInS <= -2) {
      result = "";
    } else {
      if (numInS >= letterInS) {
        for (j = 0; j < numInS; j++) {
          final.push(numArr[j]);
          final.push(letterArr[j]);
        }

        result = final.join("");
      } else {
        for (d = 0; d < letterInS; d++) {
          final.push(letterArr[d]);
          final.push(numArr[d]);
        }

        result = final.join("");
      }
    }
  }
  return result;
};

console.log(reformat("a0b1c2"));
console.log(reformat("leetcode"));
console.log(reformat("1229857369"));
console.log(reformat("covid2019"));
console.log(reformat("ab123"));
console.log(reformat("abcaa234"));
console.log(reformat("abcafasdfasa234"));
console.log(reformat("abcaf23213123234"));
