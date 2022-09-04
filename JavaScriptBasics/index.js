//Variables in JavaScript

//var, let, const

//var is used to declare a variable in JavaScript
//var is function or globally scoped
//var is hoisted

//let is used to declare a variable in JavaScript
//let is block scoped
//let is not hoisted

//const is used to declare a variable in JavaScript
//const is block scoped
//const is not hoisted

const javaScrVar = () => {
  var a = 10;
  let b;
  const c = 30;
  console.log("first ", a);
  console.log("sec", b);
  console.log("thrid", c);
  if (true) {
    var a = 20;
    b = 13;
    const c = 17;
    console.log("first ", a);
    console.log("sec", b);
    console.log("thrid", c);
  }
  //   var a = 5;
  console.log("first ", a);
  console.log("sec", b);
  console.log("thrid", c);
};

javaScrVar();

console.log("not strict mod==", 2 == "2");
console.log("strict mode==", 2 === "2");

//Arrays in JavaScript
/// declare an array of country names with cities
const country = [
  {
    name: "India",
    cities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
  },
  {
    name: "USA",
    cities: ["New York", "Los Angeles", "Chicago", "Houston"],
  },
  {
    name: "UK",
    cities: ["London", "Birmingham", "Manchester", "Liverpool"],
  },
];

///

// array of country name using map
const countryName = country.map((item) => {
  if (item.name === "India") {
    return item;
  }
  return;
});

const countryName1 = country.filter((ash) => ash.name === "India");

const countryName2 = country.find((item) => item.name === "India");

const countryName3 = country;

// console.log(countryName);
// console.log(countryName1);
// console.log(countryName2);
console.log("Before", country, "----", countryName3);
countryName3[0] = { name: "India", cities: ["Delhi", "Mumbai", "Chennai"] };
console.log("after", country, "----", countryName3);

//Closure in JavaScript
//Closure is a function that has access to the parent scope, even after the parent function has closed.

const outer = () => {
  let a = 10;
  const inner = () => {
    console.log(a);
  };
  return inner;
};
const i = outer();
i();

let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let addByTwo = add(6);
addByTwo(3);

///

const student_1 = {
  name: "Randall",
  displayName_1: function displayName() {
    this.name = "Ashish";
    console.log(this.name);
  },
};
const student_2 = {
  name: "Raj",
  displayName_2: function displayName() {
    console.log(this.name);
  },
};

student_1.displayName_1();
student_2.displayName_2();
console.log(student_1.name);

function tempFunc(i) {
  i[0] = "pokra";
  console.log(i);
}
var name = ["vinay"];
console.log(name);
tempFunc(name);
console.log(name);
