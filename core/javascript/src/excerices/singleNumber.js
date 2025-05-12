function singleNumber(nums) {
  let result = 0
  for (let n of nums) {
    // 2^2 = 0
    // 2^0 = 2
    result ^= n
    console.log({
      result,
    })
  }

  return result

  //   const sortedArr = nums.sort((a, b) => a + b)
  //   const resultObj = {}
  //   for (let i = 0; i < sortedArr.length; i++) {
  //     const curNum = sortedArr[i]
  //     if (!resultObj[curNum]) {
  //       resultObj[curNum] = 1
  //     } else {
  //       resultObj[curNum]++
  //     }
  //   }
  //   return +Object.keys(resultObj).find(x => resultObj[x] === 1)
}

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(singleNumber([1])) // 1
