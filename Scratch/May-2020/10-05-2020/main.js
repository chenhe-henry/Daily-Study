const zoo = {
  lion: 5,
  panda: 6,
  tiger: 3,
  horse: 8,
};

const newA = Object.keys(zoo);
console.log(newA);
const newB = Object.values(zoo);
console.log(newB);
const newArr = Object.entries(zoo);
console.log(newArr);

newArr.forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});
