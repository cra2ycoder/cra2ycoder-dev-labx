function fizzBuzz(n) {
  let result = []

  for (let i = 1; i <= n; i++) {
    let shouldDivBy3 = i % 3 === 0
    let shouldDivBy5 = i % 5 === 0

    if (shouldDivBy3 && shouldDivBy5) {
      result.push('FizzBuzz')
    } else if (shouldDivBy3) {
      result.push('Fizz')
    } else if (shouldDivBy5) {
      result.push('Buzz')
    } else {
      result.push(i.toString())
    }
  }
  return result
}

module.exports = {
  fizzBuzz,
}
