var prizes = ["silver", "gold", "bronze"];
for (let b = 0; b < prizes.length; b += 1) {
  document.getElementById("btn-" + (b + 1)).onclick = function() {
    alert(`You won ${prizes[b]}`);
  };
}
