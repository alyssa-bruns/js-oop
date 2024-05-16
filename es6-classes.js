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
    this.move = function () {}
  }

  //Defining methods
  //All methods will be added to the prototype
  draw() {
    console.log('draw')
  }
}

const c = new Circle(1)

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
