function Shape(color) {
  this.color = color
}

//move duplication function to Shape so both circle and square can inherit the function
Shape.prototype.duplication = function () {
  console.log('duplicate')
}
function Circle(radius, color) {
  //Superconstructor
  Shape.call(this, color)
  this.radius = radius
}
//new circleBase object that inherits from shapeBase
//Changes the constructor to Shape
Circle.prototype = Object.create(Shape.prototype)

//Best practice to reset constructor after resetting prototype
Circle.prototype.constructor = Circle

Circle.prototype.draw = function () {
  console.log('draw')
}

function Square(size) {
  this.size = size
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

const s = new Shape()
const c = new Circle(1, 'yellow')
