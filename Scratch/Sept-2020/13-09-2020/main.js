let res = 9;

let newFunction = (num) => {
  return new Promise((resolve, reject) => {
    console.log(`Promise starting`);
    if (num > 5) {
      resolve(`Nice, the num is larger than 5 ${res} = ${num}`);
    } else {
      reject(`Sorry, the num is too small`);
    }
  });
};

let newResponse = (response) => {
  return new Promise((resolve) => {
    console.log(`newResponse is coming`);
    resolve(`Now you can see the response is ${response}`);
  });
};

(coming = async () => {
  try {
    const response = await newFunction(6);
    console.log(`Response received`);
    const precessResponse = await newResponse(response);
    console.log(precessResponse);
  } catch (err) {
    console.log(err);
  }
})();
