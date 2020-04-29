console.time("loop");
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.timeEnd("loop");

//use console.time('name') and console.timeEnd('name') to calculate the function's runtime
//it is mostly used when you need to do performance check

console.time();
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd();
