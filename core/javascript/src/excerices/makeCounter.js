const counter = (function (initialValue = 0) {
  let count = initialValue
  return function () {
    return count++
  }
})()

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
console.log(counter()) // 4
console.log(counter()) // 5
console.log(counter()) // 6
console.log(counter()) // 7
