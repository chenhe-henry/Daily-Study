// 1. can use ? : to replace if else s
const age = 70;
age > 15
  ? age > 50
    ? console.log("haha, nice boy")
    : console.log("haha, little man")
  : console.log("young");

//   2. can append an empty string "", to convert a number/boolean to a string
const myAge = 20 + "";

console.log(myAge);
console.log(typeof myAge);

// 3. use .fill
// if const array = Array(5) and clg it, it will only clg 5 empty string. but you can fill it with anything
const array = Array(5).fill(9);
console.log(array);

// 4.unique array
// Array.from(new Set()) will filter and get the unique element
const users = ["Jack", "Harry", "Lucy", "Gen", "Harry", "Jack"];
const unique = Array.from(new Set(users));
console.log(users);
console.log(unique);

// 5.dynamic object
// use [] in an object, you can dynamicly change the key
const dynamic = "hobby";

const user = {
  name: "Chen",
  email: "ga@g.mail",
  [dynamic]: "sleep"
};

console.log(user);

// 6. slicing array
// define array.length to directly short the array

const gamers = [1, 2, 3, 4, 5, 6, 7];

gamers.length = 3;

console.log(gamers);

// 7. slicing array end
// arr.slice(-num)   num means the last x element in the array
const game = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(game.slice(-2));

// 8. array to object
// user {...arr} to convert arr to an object
const numbers = [1, 2, 3, 4, 5, 6, 7];

const numbersObj = { ...numbers };
console.log(numbersObj);

// 9. object to array
// use Object.keys/values() to convert an array to obj
const members = {
  name: "ed",
  ocupation: "teacher",
  hobby: "sleep"
};
const membersArray = Object.values(members);
console.log(membersArray);

// 10. performance
let startAt = performance.now();

for (let i = 0; i < 21920; i++) {
  console.log(i);
}

let endAt = performance.now();

console.log(`${endAT - startAT} took milliseconds to exouigew `);
