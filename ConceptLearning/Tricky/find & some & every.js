let users = [
  {
    name: "Chen",
    age: 28,
  },
  {
    name: "Han",
    age: 27,
  },
];

var isChenHere = users.some((user) => user.name);
var isChenFirst = users.find((user) => user.name);
console.log(isChenHere);
console.log(isChenFirst);

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.some((number) => number === 2));
console.log(numbers.some((number) => number === 9));
console.log(numbers.find((number) => number === 3));
console.log(numbers.find((number) => number === 9));
console.log(numbers.every((number) => number === 2));
console.log(numbers.every((number) => number !== NaN));
// use some() to check if the array contains the value we need, return true of false
// use find() to find if the array contains the value we need, return the fisrt value found if it is in the array, or undefined
// use every() to check if every value in the array can meet the requirement, return true or false
