// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

var backspaceCompare = function (S, T) {
  const newArrS = S.split("");
  const newArrT = T.split("");
  for (let i = 0; i < S.length; i++) {
    if (newArrS.includes("#")) {
      if (newArrS.indexOf("#") != 0) {
        newArrS.splice(newArrS.indexOf("#") - 1, 2);
      } else {
        newArrS.splice(newArrS.indexOf("#"), 1);
      }
    }
  }
  for (let j = 0; j < T.length; j++) {
    if (newArrT.includes("#")) {
      if (newArrT.indexOf("#") != 0) {
        newArrT.splice(newArrT.indexOf("#") - 1, 2);
      } else {
        newArrT.splice(newArrT.indexOf("#"), 1);
      }
    }
  }

  if (newArrS.toString() === newArrT.toString()) {
    console.log(newArrS, newArrT);
    return true;
  } else {
    console.log(newArrS, newArrT);
    return false;
  }
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("y#fo##f", "y#f#o##f"));
