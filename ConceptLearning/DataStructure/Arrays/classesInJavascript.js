//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
console.log(object1 === object2);
console.log(object1 === object3);
object1.value = 15;
object1 = { value: 10 };
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object2.value);
console.log(object3.value);

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;
var arr3 = [1, 2, 3, 4];
console.log(arr1 === arr2);
console.log(arr1 === arr3);
arr1[2] = 5;
arr1 = [1, 2, 3];
console.log(arr1);
console.log(arr2);
console.log(arr3);
// primitive type  && non-primitive type
// primitive type means that it is defined by programming language
// non-primitive type means that it is not defined by programming language, but defined by programmer
// object & array are reference type, which is non-primitive type

//------------------------------------------
//context vs scope
const object4 = {
  a: function () {
    console.log(this);
  },
};
object4.a();
//------------------------------------------
//instantiation

class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I am a ${this.type}`);
  }
}

//whenever you use extends, you need to use super()
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEE, I'm a ${this.type}`);
  }
}
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();
