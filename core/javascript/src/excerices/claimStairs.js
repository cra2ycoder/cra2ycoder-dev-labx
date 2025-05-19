function climbStairs(n) {
  if (n <= 2) return n

  // n >= 3 possibilities
  const possibleStepsBefore = [0, 1, 2]

  // fibonacci type of algorithms
  // adding previous two numbers to find the values
  for (let i = 3; i <= n; i++) {
    possibleStepsBefore[i] =
      possibleStepsBefore[i - 1] + possibleStepsBefore[i - 2]
  }

  return possibleStepsBefore[n]
}

module.exports = {
  climbStairs,
}
