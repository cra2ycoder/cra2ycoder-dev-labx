// option 1 (recursion type)
function jsCurry(...args) {
  return function (...nextArgs) {
    if (nextArgs && nextArgs.length > 0) {
      return jsCurry.apply(this, [args, nextArgs].flat(1))
    }
    return args.reduce((acc, cv) => acc + cv, 0)
  }
}

// option 2: not recommended as it will work only for the single arg
function simpleCurry(x) {
  let result = x || 0

  return function (y) {
    if (!y) {
      return result
    }
    result += y
    return simpleCurry(result)
  }
}

// option 3 (good one with closure technique)
function alternateCurry(...args) {
  const nxtArgsFn = function (...nxtArgs) {
    if (nxtArgs.length === 0) {
      return args.reduce((acc, cv) => acc + cv, 0)
    }
    return alternateCurry.apply(this, [...args, ...nxtArgs])
  }

  return nxtArgsFn
}

// option 4: not recommended approach
let result = 0
function recursiveCurry(...args) {
  result += args.reduce((acc, cv) => acc + cv, 0)

  if (args.length === 0) {
    return result
  }
  return recursiveCurry.bind(this)
}

// console.log(simpleCurry(1)(2)(3)(8)())
// console.log(jsCurry(1, 2)(2, 4)(3)(8)())
// console.log(alternateCurry(1, 2)(2, 4)(3)(8, 2, 2)())
console.log(recursiveCurry(1, 2)(1, 2)(2, 4)(3)(8, 2, 2)())
