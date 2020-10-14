function showFruitName(el) {
  return (el = el || "apple");
}

console.log(showFruitName());
console.log(showFruitName("banane"));
console.log(showFruitName(false));
console.log(showFruitName(0));

console.log("-----------");
function showFruit(el = "apple") {
  return el;
}
console.log(showFruit());
console.log(showFruit("banane"));
console.log(showFruit(false));
console.log(showFruit(0));
