// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.
var firstUniqChar = function (s) {
  let newSub = [];
  let finalSub = [];
  const testStr = s.toString();
  for (let i = 0; i < testStr.length; i++) {
    newSub.push(testStr[i]);
  }
  for (let j = 0; j < newSub.length; j++) {
    const final = newSub.splice(j, 1);
    finalSub.push(final);
  }
  return finalSub;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
