function fibonacci(n) {
  if (n <= 0) return 0

  const stack = [0, 1]
  //   let result = 1

  for (let i = 2; i <= n; i++) {
    // result = stack[i - 1] + stack[i]
    // stack.push(result)
    stack[i] = stack[i - 1] + stack[i - 2]
  }

  return stack[n]
}

module.exports = {
  fibonacci,
}
