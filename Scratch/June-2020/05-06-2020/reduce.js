// const fooReducer = (acc, value, index, array) => [acc, value, index];
// const bar = ["heofa", "fasdfasd", "fdasf", "nadna"];
// const value = bar.reduce(fooReducer);
// console.log(value);

const vara = [1, 2, 3, 4, 5];
const nana = vara.reduce((a, b, c) => {
  console.log(a);
  return a + b;
}, 0);
console.log(nana);
