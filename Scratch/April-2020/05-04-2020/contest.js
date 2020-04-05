// // Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater
// than the sum of the non included elements in such subsequence.

// // If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions,
// return the subsequence with the maximum total sum of all its elements.
// A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.

// // Note that the solution with the given constraints is guaranteed to be unique.
// Also return the answer sorted in non-increasing order.

// Input: nums = [4, 3, 10, 9, 8];
// Output: [10, 9];

var minSubsequence = function(nums) {
  let MaxArr = [];

  MaxNum = Math.max(...nums);
  let sumOfMax = MaxNum;
  console.log(sumOfMax);
  MaxArr.push(MaxNum);
  indexOfMax = nums.indexOf(MaxNum);
  nums.splice(indexOfMax, 1);

  for (i = indexOfMax; i < nums.length; i++) {
    const nextNum = nums[i + 1];
    sumOfMax = MaxNum + nextNum;
    nums.splice(i, 1);
    const sumOfRest = nums.reduce((a, b) => a + b);
    if (sumOfMax > sumOfRest) {
      return MaxArr;
    }
  }
};

minSubsequence([4, 3, 10, 9, 8]);
