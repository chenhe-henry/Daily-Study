const counters = document.querySelectorAll(".counter");
const speed = 1000;

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
const countersDay = document.querySelectorAll(".counterDay");
const today = new Date();
const before = new Date("December 17, 2019 03:24:00");
document
  .getElementById("timenow")
  .setAttribute("data-target", (today - before) / 1000 / 60 / 60 / 24);
document
  .getElementById("timebefore")
  .setAttribute("data-target", (today - before) / 1000 / 60 / 60 / 24 / 7);
console.log((today - before) / 1000 / 60 / 60 / 24);

const speedDay = 10000;

countersDay.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);

    const inc = target / speedDay;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
