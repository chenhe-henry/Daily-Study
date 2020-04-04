var isHappy = function(n) {
  let num = n.toString();
  let processingValue = [n];
  while (true) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
      result += num[i] * num[i];
    }
    if (result === 1) {
      return true;
    } else if (processingValue.includes(result)) {
      return false;
    }
    processingValue.push(result);
    num = result.toString();
  }
};

console.log(isHappy(109));
