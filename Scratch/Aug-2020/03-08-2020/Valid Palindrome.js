// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

//     Note: For the purpose of this problem, we define empty string as valid palindrome.

//         Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

var isPalindrome = function (s) {
  let sSorted = s
    .split(",")
    .join("")
    .split(":")
    .join("")
    .split(" ")
    .join("")
    .split(".")
    .join("")
    .toLowerCase();
  if (sSorted === sSorted.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
