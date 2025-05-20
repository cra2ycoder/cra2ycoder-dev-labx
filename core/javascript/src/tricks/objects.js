const person = Object.freeze({
  name: 'John',
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`)
  },
})

// Attempting to modify the frozen object
person.name = 'Jane' // This will not change the name
person.greet = function () {
  console.log(`Hi, I'm ${this.name}`)
}
// Attempting to add a new property
person.city = 'New York' // This will not add the city property

// Attempting to delete a property
delete person.age // This will not delete the age property

console.log(person) // Output: { name: 'John', age: 30, greet: [Function] }

const person2 = Object.seal({
  name: 'John',
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`)
  },
})

// Attempting to modify the sealed object
person2.name = 'Jane' // This will change the name
person2.greet = function () {
  console.log(`Hi, I'm ${this.name}`)
}
// Attempting to add a new property
person2.city = 'New York' // This will not add the city property

// Attempting to delete a property
delete person2.age // This will not delete the age property

console.log(person2) // Output: { name: 'Jane', age: 30, greet: [Function] }
