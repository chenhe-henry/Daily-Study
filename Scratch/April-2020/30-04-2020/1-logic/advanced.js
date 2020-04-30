console.time("This accounting funtion");
function numberToAccountingString(number) {
  if (number != null) {
    if (number < 0) {
      return `(${Math.abs(number)})`;
    } else {
      return number.toString();
    }
  }
}

console.log(numberToAccountingString(0));
console.log(numberToAccountingString(10));
console.log(numberToAccountingString(-5));
console.log(numberToAccountingString(undefined));
console.timeEnd("This accounting funtion");
