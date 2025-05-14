function sort() {
  const arr = [20, 1, 3]
  arr.sort()

  // lexicographical string sort will happen
  console.log(arr) // [1, 20, 3]
}

// sort()

function scopeVariable() {
  {
    var a = 1
    let b = 2
    const c = 3
  }

  // a -> 1
  // b & c => Reference Error
  console.log(a, b, c)
}

// scopeVariable()

function truthyCheck() {
  if (isNaN) {
    console.log('true')
  }

  if ([]) {
    console.log('true')
  }

  if ({}) {
    console.log('true')
  }
}

// truthyCheck()

function unicodeCompare() {
  // type conversion will not happen
  // as its both values datatypes are same
  // lexicographical method will applied
  // takes first character and converts into unicode then prints

  // '2' => 50
  // '1' => 49
  // hence, 50 > 49 => true
  console.log('2' > '10')

  // now, we have different data types
  // so, type conversion will happen as we have number and it is arithmetic operations
  // 2 > 10 => false
  console.log('2' > 10)
}

// unicodeCompare()

function floatingPointAddition() {
  const a = 0.1
  const b = 0.2

  // console.log(a + b, Math.abs(a - b - 0.3) < Number.EPSILON)

  // represented in binary (IEEE 754), some decimals can’t be expressed exactly.
  // console.log(a + b === 0.3)
  const add = a + b
  console.log(`result >>> 0.1+0.2 >>>`, Math.abs(add - 0.3) < Number.EPSILON)
}

// floatingPointAddition()

function booleanAddition() {
  console.log(1 + false) // 1
  console.log(1 + true) //2
  console.log(1 - false) // 1
}

// booleanAddition()

function strAndArrComparison() {
  console.log([1, 2, 3] == '1,2,3', [1, 2, 3] === '1,2,3') // true, false
}

// strAndArrComparison()

function naNComparison() {
  console.log(NaN == NaN) // false
  console.log(null === undefined) // false
  console.log(null == undefined) // true
}

// naNComparison()

function arrAddition() {
  console.log([1, 2, 3] + [1, 3, 4]) // 1,2,31,3,4
  console.log(+true) // 1
  console.log(!'s') // false
  console.log([] + []) // ""
  console.log([1] + []) //1
  console.log([1] + ['a', 'b']) //1a,b
}

// arrAddition()
