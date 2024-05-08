//Property Attributes
let person = { name: 'Alyssa' }
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false,
})

//Get Prototype
console.log(Object.getPrototypeOf(person))

function Circle(radius) {
  this.radius = radius
  this.move = function () {
    //Can reference protoype members in instance members and vise versa
    // this.draw()
    console.log('move')
  }
}
const circle = new Circle(1)

// Get prototype from constructor
// Object.prototype reference objBase
// Array.prototype references arrayBase
// Circle.prototype reference circleBase

//Move the function to the prototype so it can be used by inheritance but not be copied on each child
//Prototype Members
Circle.prototype.draw = function () {
  this.move()
  console.log('draw')
}
const c1 = new Circle(1)
const c2 = new Circle(1)

c1.draw()

Circle.prototype.toString = function () {
  return 'Circle with radius ' + this.radius
}

console.log(c1.toString())
//Object.kets only return instance members
console.log(Object.keys(c1))

//For/in loop returns instnace + prototype members
for (let key in c1) console.log(key)
