var nums = [1, 2, 5, 6, 7, 9];

var sum = nums.reduce((x, y) => y - x);
console.log(sum);
console.log("------------");

3 > 2 && console.log("nice");
console.log("------------");

function doSomething(el) {
  return (el = el || 23);
}

console.log(doSomething(NaN));
