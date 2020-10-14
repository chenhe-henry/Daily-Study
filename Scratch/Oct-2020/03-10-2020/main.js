let newtest = () => {
  return [
    () => {
      console.log("cm1");
    },
    () => {
      console.log("cm2");
    },
    () => {
      console.log("cm22");
    },
  ];
};
const [
  fn1,
  fn2,
  fn3 = () => {
    console.log("cm3");
  },
] = newtest();
fn1(); //cm1
fn2(); //cm2
fn3(); //cm22
3644368;
3589349;
10440;
686828;
676388;
427;

3840;
427;
1920;
310;
1920;
191;
28800;
191;
