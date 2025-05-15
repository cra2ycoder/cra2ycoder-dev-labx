function fibonacci(n) {
  const stack = [0, 1]
  let result = 1 // 0+1

  for (let i = 2; i <= n; i++) {
    stack.push(i)
    result = stack[i - 1] + stack[i]
  }

  return result
}

module.exports = {
  fibonacci,
}
