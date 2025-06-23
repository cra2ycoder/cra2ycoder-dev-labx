function sumOfGoodNumbers(nums, k) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    let cn = nums[i]

    let rule1 = i - k < 0 || cn > nums[i - k]
    let rule2 = i + k >= nums.length || cn > nums[i + k]

    if (rule1 && rule2) {
      result += nums[i]
    }
  }
  return result
}

module.exports = {
  sumOfGoodNumbers,
}
