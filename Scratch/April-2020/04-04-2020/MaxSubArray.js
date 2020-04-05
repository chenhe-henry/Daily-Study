// Given an integer array nums,
// find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
var maxSubArray = function(nums) {
  let current = nums[0];
  let result = current;
  for (let i = 1; i < nums.length; i++) {
    current += nums[i];
    nums[i] > current ? (current = nums[i]) : (current = current);
    current > result ? (result = current) : (result = result);
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
