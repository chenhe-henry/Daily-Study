const str1 = "CTGASA";
const str2 = "TABSA";
let arr1 = str1.split("");
let arr2 = str2.split("");
let intersection = new Set([...arr1].filter((x) => arr2.includes(x)));
console.log(intersection);
intersection.forEach(function (value) {
  console.log(value);
});
