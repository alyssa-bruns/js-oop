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
circle.draw()
circleFactory.draw()
