setTimeout(() => {
  console.log("5");
  function1();
}, 2000);

const function1 = () => {
  console.log("1");
  console.log("2");
  console.log("3");
};
