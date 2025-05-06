let numbers = [1, 2, 11, 4, 15, 5]
let target = 19

function getSumIndex(numList, target) {
  for (let i = 0; i < numList.length; i++) {
    const curNumber = numList[i] // 1

    // tricky part
    // any number subtract with another number, we will get balance value
    const numToBeFound = target - curNumber // 19 - 1 => 18, or 19 - 4 = 15

    // finding the index of found number in the balance array items
    const indexOfNumberFound = numList.findIndex(
      (x, idx) => idx !== i && x === numToBeFound
    )

    // if number found in the balance array
    if (indexOfNumberFound !== -1) {
      return [i, indexOfNumberFound]
    }
  }
}

const result = getSumIndex(numbers, target)
console.log(`result >>>>`, result)
