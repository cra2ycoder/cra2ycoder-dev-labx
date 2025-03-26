function meanArray(valueArr) {
  if (!valueArr) {
    console.error('valueArr should not be null/undefined')
    return
  }

  if (valueArr.length === 0) {
    console.warn(`valueArr should not be length 0`)
    return 0
  }

  const total = valueArr.reduce((pv, cv) => pv + cv)
  return total / valueArr.length
}

console.log(meanArray([0, 1, 2, 4, 6, 8]))
