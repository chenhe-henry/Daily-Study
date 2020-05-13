// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function (x) {
  let arr;
  if (x >= 0) {
    arr = x.toString().split("").reverse().join("");
    if (arr < Math.pow(2, 31) - 1) return arr;
    return 0;
  } else {
    arr = (-x).toString().split("").reverse().join("");
    if (-arr > Math.pow(-2, 31)) return -arr;
    return 0;
  }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
