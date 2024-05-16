// function Circle(radius) {
//   this.radius = radius
//   this.draw = function () {
//     console.log('draw')
//   }
// }

// classes are essentially constructor functions
// typeof Circle returns "function"
class Circle {
  //Body can contain properties
  constructor(radius) {
    this.radius = radius
    //define a method in the constructor so it is not added to the prototype
    this.move = function () {
      console.log(this)
    } // strict mode
  }

  //Defining methods
  //All methods will be added to the prototype
  //Instance method = available on an instance of a class (object)
  draw() {
    console.log('draw')
  }
  // Static method - not avilable on c.parse, but on the class referene (Circle.parse)
  static parse(str) {
    const radius = JSON.parse(str).radius
    return new Circle(radius)
  }
}

const c = new Circle(1)
const circle = Circle.parse('{"radius": 1}')
console.log(c)
console.log(circle)

const move = c.move
//function call -> points to global object / window in browser
move()

//Static methods = available on the class itself, not the function
//Used to create utility functions / not specific to a given object

// Hoisting = raised to the top of the code

sayHello() //works before it is initialized b/c hoisted
// sayGoodbye does not work = not hoisted

//Function Delcaration syntax - hoisted
function sayHello() {}
//Function Expression syntax
const sayGoodbye = function () {}

// Classes can be declared using declaration or expresion syntax
// Class Declaration = NOT HOISTED LIKE FUNCTION DECLARATION
class Triangle {}
// Class Expression - not used as much // more complex // less clean
const Square = class {}

//Private Properties and methods - use symbols to create private properties/methods
const _radius = Symbol() // unique identifier (will create new everytime called)
const _draw = Symbol()

class Oval {
  constructor(radius) {
    // Can use a symbol as a property name instead of a string
    this[_radius] = radius
  }

  [_draw]() {
    //unique identifier will be used as the name of the method
  }
}

const o = new Oval(1)
const key = Object.getOwnPropertySymbols(o)[0]
console.log(o[key])
