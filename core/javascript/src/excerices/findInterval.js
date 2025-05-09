const intervals = [
  [3, 1],
  [2, 6],
  [5, 9],
  [19, 18],
]

function mergeIntervals(listOfIntervals) {
  // expecting the array of items can be in different order
  // sorting to make it in right order
  const sorted = listOfIntervals.map((arrItem, index) => {
    return arrItem.sort((x, y) => x - y)
  })

  // storing the first item into result
  const result = [sorted[0]]

  // starting the loop from 1
  for (let i = 1; i < sorted.length; i++) {
    // taking last element of an which is pushed into result array
    let prevNumbers = result[result.length - 1]

    // taking current element for comparison
    let curNumbers = sorted[i]

    // if previous last number is lesser than current firstNumber
    // then should be swapped
    if (prevNumbers[1] >= curNumbers[0]) {
      prevNumbers[1] = Math.max(prevNumbers[1], curNumbers[1])
    } else {
      // if fails, checking for other alternatives
      result.push(curNumbers)
    }
  }

  return result
}

console.log(mergeIntervals(intervals))
