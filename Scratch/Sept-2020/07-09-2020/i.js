let talkToWorkPlace = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location} now...`);
    if (location === "Carlingford") {
      resolve("Carlingford Arrived");
    } else {
      reject("We need to arrive to Carlingford at first");
    }
  });
};

let buySomeFood = (response) => {
  return new Promise((resolve, reject) => {
    console.log(`Processing response now...`);
    resolve(`Now you can order something at ${response}`);
  });
};

let coming = async () => {
  try {
    const response = await talkToWorkPlace("Carlingford");
    console.log(`Response received`);
    const processResponse = await buySomeFood(response);
    console.log(processResponse);
  } catch (err) {
    console.log(err);
  }
};

coming();
