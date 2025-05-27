function addDigits(num) {
  if (num <= 9) {
    return num
  }

  let numAsStrArr = num.toString().split('')
  let result = numAsStrArr.reduce((acc, cv) => +acc + +cv, 0)
  return addDigits(result)
}

module.exports = {
  addDigits,
}
