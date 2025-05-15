function removeElement(nums, val) {
  let k = 0
  nums.forEach((el, i) => {
    if (el !== val) {
      nums[k] = el
      k++
    }
  })
  return k
}

module.exports = {
  removeElement,
}
