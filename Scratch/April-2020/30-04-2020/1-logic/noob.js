console.time("This accounting funtion");
function toAccounting(n) {
  if (n < 0) {
    return "(" + Math.abs(n) + ")";
  } else {
    return n.toString();
  }
}

console.log(toAccounting(0));
console.log(toAccounting(10));
console.log(toAccounting(-5));
console.log(toAccounting(undefined));
console.timeEnd("This accounting funtion");
