// Given an array of numbers arr.A sequence of numbers is called an arithmetic progression
// if the difference between any two consecutive elements is the same.

// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

//     Example 1:

// Input: arr = [3, 5, 1]
// Output: true
// Explanation: We can reorder the elements as [1, 3, 5] or[5, 3, 1] with differences 2 and - 2 respectively, between each consecutive elements.
//     Example 2:

// Input: arr = [1, 2, 4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

//     Constraints:

// 2 <= arr.length <= 1000
//     - 10 ^ 6 <= arr[i] <= 10 ^ 6
var canMakeArithmeticProgression = function (arr) {
  const gapArr = [];
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 1; i < sortedArr.length; i++) {
    gapArr.push(sortedArr[i] - sortedArr[i - 1]);
  }
  const ifGapUnique = new Set(gapArr);
  if ([...ifGapUnique].length === 1) {
    return true;
  } else {
    return false;
  }
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
