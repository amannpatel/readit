// const userDetail = {
//   firstName: "Aman",
//   lastName: "Patel",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(userDetail.fullName()); // Aman Patel
// const greeting = userDetail.fullName;
// console.log(greeting()); // undefined undefined

// function greet(message) {
//   return message + " " + this.name;
// }

// const user = {
//   name: "Aman",
// };

// console.log(greet.call(user, "Hii")); // Hii Aman
// console.log(greet.apply(user, ["Hi"])); // Hi Aman

// const boundedGreet = greet.bind(user);
// console.log(boundedGreet("Hello")); //Hello Aman
