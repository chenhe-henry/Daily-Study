var test = document.getElementById("replacement");
var x = document.getElementById("showword");
var y = document.createElement("h1");
y.innerHTML = test.innerHTML;
x.addEventListener("click", () => {
  test.parentNode.replaceChild(y, test);
});
