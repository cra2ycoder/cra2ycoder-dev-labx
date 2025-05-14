function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial cant be defined for negative numbers!')
  }

  if (n === 0 || n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

module.exports = {
  factorial,
}
