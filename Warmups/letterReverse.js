//Write a function letterrReverse that accepts a single argument, a string.
//The function should maintain the order of words in the string but reverse the letters in each word.
//Don't worry about punctuation.
// console.log(letterReverse("Luck I am your father"));
// => "ekuL I ma ruoy rethaf"
// console.log(letterReverse("Aren't you a little short for a storm trooper"))
// => "t'nerA uoy a elttil trohs rof a mrots repoort"
const letterReverse = (str) => {
  let reversed = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");

  return reversed;
};

console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));
