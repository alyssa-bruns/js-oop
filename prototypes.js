//Property Attributes
let person = { name: 'Alyssa' }
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false,
  configurable: false,
})
