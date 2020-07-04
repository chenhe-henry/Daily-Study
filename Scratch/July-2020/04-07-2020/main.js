let title = document.getElementById("title");
let counterNum = document.getElementById("counter");
let goButton = document.getElementById("go");

let questionBlock = document.getElementById("question__block");
let clickCounter = 0;
const questionsDataBase = [
  { id: 1, question: "What's your address?", answer: "Sydney" },
  { id: 2, question: "What's the color of sky?", answer: "Blue" },
  { id: 3, question: "What's the color of ocean?", answer: "Dark Blue" },
  { id: 4, question: "What's the color of grass?", answer: "Green" },
  { id: 5, question: "What's the color of sand?", answer: "yellow" },
];
const counter = () => {
  let num = 10;

  const count = () => {
    if (num === 0) {
      title.innerHTML = `Question #${clickCounter}`;
      counterNum.innerHTML = questionsDataBase[clickCounter - 1].question;
      clearInterval(countDown);
    } else {
      counterNum.innerHTML = num;
      num--;
      !isNaN(counterNum.innerHTML)
        ? console.log(counterNum.innerHTML)
        : console.log("no");
    }
  };
  let countDown = setInterval(count, 1000);
};
goButton.addEventListener("click", () => {
  counterNum.style.opacity = 1;

  questionBlock.style.opacity = 1;
  counter();
  goButton.innerHTML = "Submit";
  clickCounter++;
  title.innerHTML = `Question #${clickCounter}`;
});
if (!isNaN(counterNum.innerHTML)) {
  counterNum.style = "color:red";
} else {
  counterNum.style = "color:black";
}
