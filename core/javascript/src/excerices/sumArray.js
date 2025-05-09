// sum([]), 0
// sum([1, 5.2, 4, 0, -1]), 9.2

function sum(numbers) {
  if (numbers && numbers.length === 0) {
    return 0
  }
  const result = numbers.reduce((acc, curValue) => acc + curValue)
  return result
}

sum([]) // 0
sum([1, 5.2, 4, 0, -1]) // 9.2
