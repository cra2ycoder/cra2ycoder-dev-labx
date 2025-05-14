const { isPalindrome } = require('../excerices/isPalindrome')

test('isPalindrome', () => {
  expect(isPalindrome(121)).toBe(true)
  expect(isPalindrome(-121)).toBe(false)
  expect(isPalindrome(10)).toBe(false)
})
