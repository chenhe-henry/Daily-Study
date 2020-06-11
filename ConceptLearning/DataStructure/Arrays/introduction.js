const strings = ["a", "b", "c", "d"];

// lookup O(1)
// push   O(1)
// insert O(n)
// delete O(n)

srings[2]; //O(1)
//push
strings.push("e"); //O(1)

//pop
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift("x"); //O(n)

//splice
strings.splice(2, 0, "alien"); //O(n)

console.log(strings);
