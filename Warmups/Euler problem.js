//Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
//Adjust the function to push the even numbered values into an array.
//Adjust the function to return the summed value of even numbers the array.

const fib = (n) => {
  let cache = {};
  let arr = [];
  return function fib(n) {
    if (n in cache) {
      console.log(cache[n]);
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

const fibMaster = fib();
console.log(fibMaster(34));

const fib2 = (n) => {
  let current = [];
  if (n === 1) {
    return [1, 2];
  } else {
    current = fib2(n - 1);
    current.push(current[current.length - 1] + current[current.length - 2]);
  }
  return current;
};

console.log(fib2(5));
