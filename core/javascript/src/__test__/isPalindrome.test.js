const { isPalindrome } = require('../excerices/isPalindrome')

test('121', () => {
  expect(isPalindrome(121)).toBe(true)
})

test('-121', () => {
  expect(isPalindrome(-121)).toBe(false)
})

test('10', () => {
  expect(isPalindrome(10)).toBe(false)
})
