// Modularity = maintability, reuse, abstract

// CommonJS modules = used in Node.js
// Things highly related go together = cohesion

// Implementation Detail
const _radius = new WeakMap()

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius)
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this))
  }
}

// module.exports.Circle = Circle
// module.exports = Circle

// ES6 Modules
// Public Interface
export class Oval {
  constructor(radius) {
    _radius.set(this, radius)
  }

  draw() {
    console.log('Oval with radius ' + _radius.get(this))
  }
}

//ES6 Tooling
// Transpilier = translater + compiler = convert our code into code that all browsers can understand (babel)
// Bundler = responsible for compling all our files into one file (webpack)

//install Node (node package manager)
// npm init --yes
// npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev
// cli - command line, core -core, preset- understands all new features
