var test = document.getElementById("replacement");
var show = document.getElementById("showword");
var hide = document.getElementById("hideword");
var z = document.createElement("del");

z.innerHTML = test.innerHTML;
show.addEventListener("click", () => {
  test.parentNode.replaceChild(z, test);
});
hide.addEventListener("click", () => {
  z.parentNode.replaceChild(test, z);
});
