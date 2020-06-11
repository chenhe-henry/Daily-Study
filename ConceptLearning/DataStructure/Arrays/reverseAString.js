//Create a function that reverses a string:
//'Hi My name is Andrei' should be;
//'ierdnA si eman yM iH'

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Hi My name is Andrei"));
console.log(reverseString(""));

function revers(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm, that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}

console.log(revers("Hi My name is Andrei"));
console.log(revers(""));
