function Shape(color) {
  this.color = color
}

//move duplication function to Shape so both circle and square can inherit the function
Shape.prototype.duplication = function () {
  console.log('duplicate')
}

//Refactor so it doesn't have to be duplicated with each new shape
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

function Rectangle() {}
extend(Rectangle, Shape)
Rectangle.prototype.duplication = function () {
  console.log('duplicate rectangle')
}
//polymorphism ex: we have many forms for the duplication method

const shapes = [new Triangle(), new Rectangle()]

for (let shape of shapes) {
  shape.duplication()
}

const s = new Shape()
const c = new Circle(1, 'yellow')
const t = new Triangle()

//Mixins
//use below function to replace Object.assign
function mixin(target, ...sources) {
  Object.assign(target, ...sources)
}
// use rest parameter when you don't know how many arguments (creates an array)
// spread operator separates the array

const canEat = {
  eat: function () {
    this.hunger--
    console.log('eating')
  },
}

const canWalk = {
  walk: function () {
    console.log('walking')
  },
}

const canSwim = {
  swim: function () {
    console.log('swim')
  },
}

//to copy properties/methods of one object to another
const man = mixin({}, canEat, canWalk)
// console.log(man)

//using constructor function
function Woman() {}
//modifies constructor and adds methods
Object.assign(Woman.prototype, canEat, canWalk)
const woman = new Woman()
console.log(woman)

function Goldfish() {}
Object.assign(Goldfish.prototype, canEat, canSwim)

const goldfish = new Goldfish()
console.log(goldfish)

//Inheritance Challenge

function HtmlElement() {
  this.click = function () {
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focused')
}
