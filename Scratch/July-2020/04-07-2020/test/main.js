function changeColor() {
  const backgroundMap = document.getElementById("colorChange");
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const num3 = document.getElementById("num3");
  const num4 = document.getElementById("num4");
  const randomNum1 = Math.floor(Math.random() * 256);
  const randomNum2 = Math.floor(Math.random() * 256);
  const randomNum3 = Math.floor(Math.random() * 256);
  const randomOpacity = Math.random().toFixed(2);
  backgroundMap.style.backgroundColor = `rgba(${randomNum1},${randomNum2},${randomNum3},${randomOpacity})`;
  num1.innerHTML = randomNum1 + ", ";
  num2.innerHTML = randomNum2 + ", ";
  num3.innerHTML = randomNum3 + ", ";
  num4.innerHTML = randomOpacity;
}

const changeStart = setInterval(changeColor, 1000);

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(changeStart);
});
document.getElementById("go").addEventListener("click", () => {
  setInterval(changeColor, 1000);
});
