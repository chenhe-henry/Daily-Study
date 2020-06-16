function rob(arr) {
  let cache = {};
  return function robmaster() {
    let n = arr.length;
    if (n in cache) {
      return n;
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = robmaster(n - 1) + robmaster(n - 2);
        return cache[n];
      }
    }
  };
}
const robTop = rob();
console.log(robTop(5));
