// if a next roman is greater than previous roman then sub
// Example: IV = 5 - 1 = 4
// Example: IX = 10 - 1 = 9

// If a smaller number is after a larger one, add it.
// if a next roman is lesser than previous roman than add
// Example: VI = 5 + 1 = 6

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0
  for (let i = 0; i < s.length; i++) {
    let curRoman = s[i]
    let nxtRoman = s[i + 1]

    let curNum = romanMap[curRoman]
    let nxtNum = romanMap[nxtRoman]

    if (nxtNum > curNum) {
      total += nxtNum - curNum

      // jump to another index
      i++
    } else {
      total += curNum
    }
  }
  return total
}

module.exports = {
  romanToInt,
}

// [M C M X C I V]

// M > C
//     => (1000 > 100) => 1000
// C > M
//     => 100 > 1000 => 1000 - 100 => 900(jump) i++
// X > C
//     => 10 > 100 => 100 - 10 => 90(jump) i++
// I > V
//     => 1 > 5 => 5 - 1 => 4(jump -> end)

// 1000 + 900 + 90 + 4 => 1994
