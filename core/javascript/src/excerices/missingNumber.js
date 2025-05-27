function missingNumber(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i
    }
  }

  // const n = nums.length
  // const expectedSum = (n * (n + 1)) / 2
  // const actualSum = nums.reduce((acc, val) => acc + val, 0)
  // return expectedSum - actualSum
}

module.exports = {
  missingNumber,
}
