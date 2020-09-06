const counters = document.querySelectorAll(".counter");
const speed = 1000;
const today = new Date();
const initial = new Date("August 13, 2019 18:00:00");
document
  .getElementById("hours")
  .setAttribute("data-target", ((today - initial) / 1000 / 60 / 60 / 24) * 10);
document.getElementById("projects").setAttribute("data-target", 5);
document
  .getElementById("days")
  .setAttribute("data-target", (today - initial) / 1000 / 60 / 60 / 24);
document
  .getElementById("weeks")
  .setAttribute("data-target", (today - initial) / 1000 / 60 / 60 / 24 / 7);

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
