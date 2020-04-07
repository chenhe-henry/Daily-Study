// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function (strs) {
  let finalResult = {};
  for (let i = 0; i < strs.length; i++) {
    let result = strs[i].split("").sort().join("");
    console.log(result);
    if (finalResult[result]) {
      finalResult[result].push(strs[i]);
      console.log(finalResult[result]);
    } else {
      finalResult[result] = [strs[i]];
    }
  }
  return Object.values(finalResult);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
