/**
 * Type 1
 * @param {} s
 * @returns
 */
function isValid(s) {
  if (s.length === 0 || s.length % 2 > 0) {
    return false
  }

  let copiedStr = s
  for (let i = 0; i < s.length / 2; i++) {
    copiedStr = copiedStr
      .replaceAll('()', '')
      .replaceAll('{}', '')
      .replaceAll('[]', '')
  }

  return copiedStr.length === 0
}

/**
 * Type 2
 * @param {*} s
 * @returns
 */

function isValidV2(s) {
  if (s.length === 0 || s.length % 2 > 0) {
    return false
  }

  const stack = []
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char)
    } else {
      const lastIdxChar = stack.pop()
      if (lastIdxChar !== bracketMap[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}

module.exports = {
  isValid,
  isValidV2,
}
