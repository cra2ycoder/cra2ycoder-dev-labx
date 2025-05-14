function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial cant be defined for negative numbers!')
  }

  if (n === 0 || n === 1) {
    return 1
  }

  // iterative model
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result

  // recursive model
  // return n * factorial(n - 1)
}

module.exports = {
  factorial,
}
