// function Circle(radius) {
//   this.radius = radius
//   this.draw = function () {
//     console.log('draw')
//   }
// }

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
