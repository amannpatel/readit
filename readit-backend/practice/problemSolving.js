var a = 10;
function test() {
  console.log(a); //undefined
  var a = 20;
  console.log(a); // 20
}
test();
console.log(a); // 10

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123; // “[object Object]”: 123
a[c] = 456;
console.log(a[b]);

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
