function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

// retirement(65)(1989);

var retirementUs = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementUs(1989);
retirementGermany(1989);
retirementIceland(1989);

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");
teacherQuestion("John");
designerQuestion("John");

interviewQuestion("player")("Mark");
