function twoSum(numbers) {
  if (numbers && numbers.length === 0) {
    return 0
  }
  const result = numbers.reduce((acc, curValue) => acc + curValue)
  return result
}

module.exports = {
  twoSum,
}
