// function makeCount() {
//   var count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const counter = makeCount();
// counter();
// counter();
// counter();

function createPerson(name) {
  let age = 0;

  return {
    getDetails: function () {
      return `Name: ${name} Age: ${age}`;
    },
    grow: function () {
      age++;
    },
  };
}

const person = createPerson("Aman");
console.log(person.getDetails());
person.grow();
console.log(person.getDetails());
