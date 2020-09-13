var button = document.getElementById("btn");
var container = document.getElementById("container");
button.addEventListener("click", () => {
  clearInterval(changeBG());
});

setInterval(() => {
  document.body.style.background = randomBG();
  console.log(randomBG());
  console.log(container.style);
}, 5000);

const randomBG = () => {
  return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.random()})`;
};
