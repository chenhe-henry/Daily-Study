let numbers = [2, 3, 3];

let current = [1, ...numbers, 5];

console.log(current);

// setTimeout(() => {
//   console.log("Hello timeout!");
// }, 1000); //will print "Hello timeout!" once, after 1 second

// setInterval(() => {
//   console.log("Hello interval!");
// }, 1000); //will print "Hello interval!" every 1 second

console.log("Start");

setTimeout(() => {
  console.log("Hello timeout!");
}, 0);

console.log("End");
