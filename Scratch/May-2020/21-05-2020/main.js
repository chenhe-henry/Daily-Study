let todos = [{"",""}];
let clicked = 0;
var clickMe = document.getElementById("clickme");
clickMe.addEventListener("click", () => {
  result = document.getElementById("inputfield").value;
  todos.push({ clicked, result });
  for (let i = 0; i <= clicked; i++) {
    document.getElementById(
      `test${clicked}`
    ).innerHTML = `<div id="test${clicked}">${todos[clicked].clicked} + ${todos[clicked].result}</div>`;
  }

  localStorage.setItem(clicked, result);
  clicked++;
  if (clicked !== 0) {
    console.log(result);
  } else {
    console.log("try again");
  }
});
