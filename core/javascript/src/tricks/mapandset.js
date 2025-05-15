const movies = new Map()

movies.set('marvel', 'infinity war')
movies.set('dc', 'super man')
movies.set('james', 'avatar')

console.log(movies.get('marvel'))
console.log(movies.has('dc'), movies.has('avatar'))
console.log(movies.entries()) // Map Entries with Key value pair
console.log(movies.values()) // only values (Map Iterator) without Keys
console.log(movies.size) // length
console.log(movies.keys()) // only keys (Map Iterator) without Values
console.log(movies.delete('james')) // returns boolean (true)
console.log(movies.delete('avatar')) // returns false
console.log(movies)
movies.forEach((val, key) => {
  console.log({ val, key })
})

const cars = new Set()
cars.add('benz')
cars.add('jaquar')
cars.add('kia')
cars.add('mahindra')
cars.add('maruthi')

console.log(cars.has('maruthi'))
console.log(cars.delete('kia'))
console.log(cars.size)
console.log(cars.values())
// console.log(cars.difference(new Set('maruthi', 'benz')))
console.log(cars.entries())

cars.forEach(val1 => {
  console.log(val1)
})
console.log(cars.keys())
// console.log(cars.union())
console.log(cars)
