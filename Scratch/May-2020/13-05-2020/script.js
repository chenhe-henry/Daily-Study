const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: function () {
    return `${this.manufacturer} ${this.model}`;
  },
};

console.log(car.fullName());

const a = [1, 1, 2, 3, 4];
const b = [...a, 7, 8, 9];
console.log(b);

const c = "hallo";
const d = [...c];

console.log(d);
const f = (foo, bar) => {};
const e = [1, 2];
console.log(f(...e));

const numbers = [1, 2, 3, 4, 5];
[first, second, ...rest] = numbers;
console.log(rest);
console.log(first);
