function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0
  }

  // setting index for found the total sorted index
  let i = 0

  for (let j = 1; j < nums.length; j++) {
    // comparing the prev and cur value
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  // total + 1 (as we started from 0)
  return i + 1
}

module.exports = {
  removeDuplicates,
}
