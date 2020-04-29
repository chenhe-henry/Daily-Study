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
