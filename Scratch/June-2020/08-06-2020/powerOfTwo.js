// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false
var isPowerOfTwo = function (n) {
  let indexArr = [];
  let i = 0;
  while (Math.pow(2, i) <= n) {
    indexArr.push(i);
    i++;
  }
  if (Math.pow(2, indexArr[indexArr.length - 1]) === n) {
    return true;
  } else {
    return false;
  }
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
