// numbers
function isPalindrome(x) {
  // const reversedNumber = x.toString().split('').reverse().join('')
  // return x === +reversedNumber

  let result = ''
  let numAsString = x.toString()

  for (let i = numAsString.length - 1; i >= 0; i--) {
    let char = numAsString[i]
    result += char
  }

  return +result === x
}

// string
function isPalindromeWithSpecialChar(s) {
  s = s.replaceAll(/[\W+_]/g, '').toLowerCase()
  const reversed = s.split('').reverse().join('')

  // console.log(s)
  // console.log(reversed)
  return s === reversed
}

module.exports = {
  isPalindrome,
  isPalindromeWithSpecialChar,
}
