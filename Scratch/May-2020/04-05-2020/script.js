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
const showdetail = () => {
  document.getElementById("showtemp").innerHTML = document.getElementById(
    "temp"
  ).attributes[4].value;
};
document.getElementById("low").addEventListener("click", () => {
  document.getElementById("temp").setAttribute("value", "18");
  showdetail();
});
document.getElementById("medium").addEventListener("click", () => {
  document.getElementById("temp").setAttribute("value", "35");
  showdetail();
});
document.getElementById("high").addEventListener("click", () => {
  document.getElementById("temp").setAttribute("value", "41");
  showdetail();
});
showdetail();
