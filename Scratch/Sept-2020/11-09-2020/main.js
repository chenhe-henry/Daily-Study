const user = [
  { name: "Kyle", age: 24 },
  { name: "Joey", age: 24 },
  { name: "Bailee", age: 22 },
  { name: "Jim", age: 34 },
  { name: "Phil" },
  { name: "Sarah", age: 54 },
  { name: "John", age: 43 },
];

user.forEach((user) => {
  printUser(user);
});

function printUser(user) {
  console.log(
    `User ${user.name} will be ${user.age + 5} years old in five years.`
  );
}
