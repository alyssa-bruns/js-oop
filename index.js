//Object Literal Syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log('draw')
  },
}

circle.draw()

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('factory function')
    },
  }
}

const circleFactory = createCircle(1)
circleFactory.draw()

//Constructor Function
function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('constructor function')
  }
}

//Add new property
Circle.location = { x: 1 }
Circle['location'] = { x: 1 }

//Dynamically delete properties
delete Circle.location

//What is actually happening on line 38
Circle.call({}, 1)
const another = new Circle(1)

another.draw()
