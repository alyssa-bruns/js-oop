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

//What is actually happening on line 38
Circle.call({}, 1)
const another = new Circle(1)

another.draw()

//Add new property
another.location = { x: 1 }
another['location'] = { x: 1 }

//Dynamically delete properties
delete another.location

// Enumerating Properties - For/In loops
for (let key in another) {
  if (typeof another[key] !== 'function') {
    console.log(key, another[key])
  }
}

//Retrieve all keys
const keys = Object.keys(another)
console.log(keys)

//Check for existance of property/method
if ('radius' in another) {
  console.log('Another has a radius.')
}
