function currying(a) {
  let result = a || 0

  function internalCurrying(b) {
    if (!b) {
      return result
    }
    result += b
    return internalCurrying
  }

  return internalCurrying
}

// console.log(currying(1)(2)(3)(4)())
module.exports = {
  currying,
}
