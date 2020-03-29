console.time("loop");
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.timeEnd("loop");

console.time("complex function");

for (let a = 0; a < 3; a++) {
  for (let b = 0; b < 2; b++) {
    console.log(a + b);
  }
}
console.timeEnd("complex function");
