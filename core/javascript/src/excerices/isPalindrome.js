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

module.exports = {
  isPalindrome,
}
