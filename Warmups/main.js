const prefixCompare = (arr1, arr2) => {
  let obj = [];
  arr1.forEach((el) => {
    arr2.forEach((ele) => {
      if (
        el.length > ele.length &&
        el.split("").splice(0, ele.length).join("") === ele
      ) {
        obj.push(ele);
      }
    });
  });
  let cache = {};
  obj.forEach((elem) => {
    if (elem in cache) {
      cache[elem]++;
    } else {
      cache[elem] = 1;
    }
  });
  let final = [];
  for (let num in cache) {
    final.push(cache[num]);
  }
  console.log(final);
};

prefixCompare(
  ["jack", "steve", "chen", "han", "hanna", "hann"],
  ["jac", "steve", "han"]
);
