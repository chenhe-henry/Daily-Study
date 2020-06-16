const removeDul = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        obj[arr[i]] += 1;
      } else {
        obj[arr[i]] = 1;
      }
    }
  }
  return obj;
};

console.log(removeDul([1, 1, 2, 2, 4, 5, 7]));
