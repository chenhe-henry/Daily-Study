// Write code that takes word problems in the following formats:
// What is 5 plus 13 ?
// What is 7 minus 5 ?
// What is - 6 multiplied by 4 ?
// What is 25 divided by - 5 ?
// and returns the answer as an integer

const operator = {
  plus: "+",
  minus: "-",
  multiplied: "*",
  divided: "/"
};

const question = str => {
  const questionArray = str
    .substr(0, str.length - 1)
    .split(" ")
    .splice(2);
  const firstNum = questionArray[0];

  const secondNum = questionArray[questionArray.length - 2];

  const result = eval(`${firstNum} ${operator[questionArray[1]]} ${secondNum}`);
  return result;
};
console.log(question("What is 5 plus 13 ?"));
console.log(question("What is 7 minus 5 ?"));
console.log(question("What is -6 multiplied by 4 ?"));
console.log(question("What is 25 divided by -5 ?"));
