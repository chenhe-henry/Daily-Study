var print = (msg) => {
  if (Number(msg) === NaN) {
    console.log(msg);
  } else {
    console.log(msg + "nice");
  }
};

var talk = () => {
  print("ns");
};
talk();
