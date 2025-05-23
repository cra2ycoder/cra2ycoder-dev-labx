function flatArray(arr) {
  // 1. recursive
  // 2. array concat
  // 3. ensure it is array
  // 4. array reduce
  return arr.reduce((acc, cv) => {
    return acc.concat(Array.isArray(cv) ? flatArray(cv) : cv)
  }, [])
}

const flattenArr = flatArray([1, 2, [3, 4], [5, [6, 7, [8]]]])

console.log(flattenArr)
