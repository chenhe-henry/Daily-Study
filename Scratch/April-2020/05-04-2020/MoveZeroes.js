// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    indexOfZero = nums.indexOf(0);
    nums.push(parseInt(nums.splice(indexOfZero, 1)));
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
