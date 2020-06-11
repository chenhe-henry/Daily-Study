function foodChoice(food) {
  if (food === "fish") {
    return function (name) {
      console.log("Hi, " + name + ". Good choice, the fish is really fresh.");
    };
  } else if (food === "beef") {
    return function (name) {
      console.log(name + ", do you want to have a beef pizza?");
    };
  } else {
    return function (name) {
      console.log("Hi, " + name + ". What do you want to have for dinner?");
    };
  }
}

foodChoice("fish")("Chen");
foodChoice("beef")("Han");
foodChoice("seafood")("Henry");
