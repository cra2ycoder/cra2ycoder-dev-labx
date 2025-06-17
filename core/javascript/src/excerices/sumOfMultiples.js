function sumOfMultiples(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    const shouldDivBy3 = i % 3 === 0
    const shouldDivBy5 = i % 5 === 0
    const shouldDivBy7 = i % 7 === 0

    if (shouldDivBy3 || shouldDivBy5 || shouldDivBy7) {
      result += i
    }
  }

  return result
}

module.exports = {
  sumOfMultiples,
}
