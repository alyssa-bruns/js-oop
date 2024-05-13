function Shape(color) {
  this.color = color
}

//move duplication function to Shape so both circle and square can inherit the function
Shape.prototype.duplication = function () {
  console.log('duplicate')
}

//Refactor 21-25 so it doesn't have to be duplicated with each new shape
//Child and Parent are capitalized because they are constructor functions
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}
function Circle(radius, color) {
  //Superconstructor
  Shape.call(this, color)
  this.radius = radius
}
// //new circleBase object that inherits from shapeBase
// //Changes the constructor to Shape
// Circle.prototype = Object.create(Shape.prototype)
// //Best practice to reset constructor after resetting prototype
// Circle.prototype.constructor = Circle

extend(Circle, Shape)

Circle.prototype.draw = function () {
  console.log('draw')
}

function Square(size) {
  this.size = size
}

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square
//Refactor

extend(Square, Shape)

function Triangle() {}

extend(Triangle, Shape)

//Method Overriding
Triangle.prototype.duplication = function () {
  //Still call parent method
  Shape.prototype.duplication.call(this)
  console.log('duplicate triangle')
}

const s = new Shape()
const c = new Circle(1, 'yellow')
const t = new Triangle()
