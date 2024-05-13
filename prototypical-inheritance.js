function Shape() {}
//move duplication function to Shape so both circle and square can inherit the function
Shape.prototype.duplication = function () {
  console.log('duplicate')
}
function Circle(radius) {
  this.radius = radius
}
//new circleBase object that inherits from shapeBase
Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function () {
  console.log('draw')
}

const s = new Shape()
const c = new Circle(1)
