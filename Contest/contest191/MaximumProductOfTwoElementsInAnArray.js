// Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of(nums[i] - 1) * (nums[j] - 1).

//     Example 1:

// Input: nums = [3, 4, 5, 2]
// Output: 12
// Explanation: If you choose the indices i = 1 and j = 2(indexed from 0),
// you will get the maximum value, that is, (nums[1] - 1) * (nums[2] - 1) = (4 - 1) * (5 - 1) = 3 * 4 = 12.
// Example 2:

// Input: nums = [1, 5, 4, 5]
// Output: 16
// Explanation: Choosing the indices i = 1 and j = 3(indexed from 0), you will get the maximum value of(5 - 1) * (5 - 1) = 16.
// Example 3:

// Input: nums = [3, 7]
// Output: 12

// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10 ^ 3
var maxProduct = function (nums) {
  let multiplyArr = [];
  let IndexOfLargestNum = nums.indexOf(Math.max(...nums));
  multiplyArr.push(nums.splice(IndexOfLargestNum, 1));
  let IndexOfSecondLargestNum = nums.indexOf(Math.max(...nums));
  multiplyArr.push(nums.splice(IndexOfSecondLargestNum, 1));
  let result = (multiplyArr[0] - 1) * (multiplyArr[1] - 1);
  return result;
};
console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
console.log(maxProduct([10, 2, 5, 2]));

// soultion 2
// nums
//     .sort(function (a, b) {
//         return a - b;
//     })
//     .reverse();
// let result = (nums[0] - 1) * (nums[1] - 1);
// return result;
