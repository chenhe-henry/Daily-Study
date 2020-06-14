// "99 Bottles of Beer" is a traditional reverse counting song.

// It is popular to sing on long trips, as it is repetitive and easy to memorise but -- it can take a long time to sing.

// Lets try and make it run a little quicker using code:

// The song's lyrics are as follows:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.

// Bear in mind, not all verses are the same:

// The verse for 1 bottle is as follows:

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).
const bottleSong = (num1, num2) => {
  for (let i = 0; i <= num1 - num2; i++) {
    if (num1 - i === 0) {
      console.log(
        `No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, ${num1} bottles of beer on the wall.`
      );
    } else if (num1 - i === 1) {
      console.log(
        "1 bottle of beer on the wall, 1 bottle of beer.Take it down and pass it around, no more bottles of beer on the wall."
      );
    } else if (num1 - i < 0) {
      return null;
    } else {
      console.log(`${num1 - i} bottles of beer on the wall, ${
        num1 - i
      } bottles of beer.
Take one down, pass it around, ${num1 - i - 1} bottles of beer on the wall...`);
    }
  }
};

// bottleSong(99, 97);
bottleSong(20, 10);
