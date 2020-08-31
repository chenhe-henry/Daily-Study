// // 20200723101747
// // https://opentdb.com/api.php?amount=10

// const receivedData = {
//   response_code: 0,
//   results: [
//     {
//       category: "Entertainment: Video Games",
//       type: "boolean",
//       difficulty: "easy",
//       question:
//         "&quot;Undertale&quot; is an RPG created by Toby Fox and released in 2015.",
//       correct_answer: "True",
//       incorrect_answers: ["False"],
//     },
//     {
//       category: "Entertainment: Film",
//       type: "boolean",
//       difficulty: "easy",
//       question:
//         "The word &quot;Inception&quot; came from the 2010 blockbuster hit &quot;Inception&quot;.",
//       correct_answer: "False",
//       incorrect_answers: ["True"],
//     },
//     {
//       category: "Entertainment: Video Games",
//       type: "multiple",
//       difficulty: "medium",
//       question:
//         "What is the full name of the protagonist from the SNES game Clock Tower?",
//       correct_answer: "Jennifer Simpson",
//       incorrect_answers: [
//         "Jennifer Barrows",
//         "Jennifer Cartwright",
//         "Jennifer Maxwell",
//       ],
//     },
//   ],
// };

// receivedData.results.forEach((el) => {
//   let allAnswers = [];
//   console.log(el.correct_answer + "|" + el.incorrect_answers);
//   el.incorrect_answers.sort(() => {
//     Math.random();
//   });
//   allAnswers.push(el.correct_answer);
//   let newCorrect = [];
//   for (let i = 0; i < el.incorrect_answers.length; i++) {
//     newCorrect.push(
//       el.incorrect_answers[
//         Math.floor(Math.random() * el.incorrect_answers.length)
//       ]
//     );

//     el.incorrect_answers.length--;
//   }
//   allAnswers.push(...newCorrect);
//   console.log(allAnswers);
// });
let ass = ["Jennifer Barrows", "Jennifer Cartwright", "Jennifer Maxwell"];
ass.forEach((el) => {
  el.startsWith("Jen") ? console.log(el) : console.log("no");
  el.endsWith("s") ? console.log(el) : console.log("no");
});
console.log(ass);
