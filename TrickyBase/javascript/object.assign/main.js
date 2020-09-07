const objA = { name: "Chen", task: "prepare interview", date: "07-09-2020" };
const objB = { name: "Chen", task: "learn woocommence", date: "08-09-2020" };
console.log(objA);
const form = document.getElementById("formV");
const result = document.getElementById("result");
result.innerHTML = JSON.stringify(objA);

document.getElementById("button").addEventListener("click", function () {
  const returnedObj = Object.assign(objA, objB);
  console.log(returnedObj);
  result.innerHTML = JSON.stringify(returnedObj);
});
