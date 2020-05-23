console.time();
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
console.table(users);

console.log(users[0].name);
console.timeEnd();

//It prints a slick table, with which you can interact, you need to pass an array of object to it.
const foo = { id: 1, height: "200px", width: "100px" };
const bar = { id: 2, height: "300px", width: "400px" };

console.table({ foo, bar });

//console.table within an object, it will have the index automatically for 0,1,2,3,4,5...
//console.table with variables, the index will be the variable's name
