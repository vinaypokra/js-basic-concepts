// // constructor function
// function Person() {
//     this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age);

//Call --------------------------------------------------------------------------
// call(), an object can use a method belonging to another object.
// const person = {
//   fullName: function (city, pinode) {
//     return this.firstName + " " + this.lastName + " " + city + " " + pinode;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// // This will return "John Doe":
// // person.fullName.call(person1, "kota", "326519");
// console.log(person.fullName.call(person1, "kota", "326519"));

//Apply

// With the apply() method, you can write a method that can be used on different objects.

// const person = {
//     fullName: function (city, pinode) {
//       return this.firstName + " " + this.lastName + " " + city + " " + pinode;
//     },
//   };

//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }

//   // This will return "Mary Doe":
// // person.fullName.apply(person1, ["kota", "326519"])
// console.log(person.fullName.call(person1, "kota", "326519"));
// console.log(person.fullName.apply(person1,[ "kota", "326519"]));
// console.log();
// const name = person.fullName.bind(person1);
// console.log(name("kota", "326519"));
