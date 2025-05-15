const {
  isPalindrome,
  isPalindromeWithSpecialChar,
} = require('../excerices/isPalindrome')

test('isPalindrome', () => {
  expect(isPalindrome(121)).toBe(true)
  expect(isPalindrome(-121)).toBe(false)
  expect(isPalindrome(10)).toBe(false)
})

test('isPalindromeWithSpecialChar', () => {
  expect(isPalindromeWithSpecialChar('A man, a plan, a canal: Panama')).toBe(
    true
  )
  expect(isPalindromeWithSpecialChar('race a car')).toBe(false)
  expect(isPalindromeWithSpecialChar(' ')).toBe(true)
  expect(isPalindromeWithSpecialChar('ab_a')).toBe(true)
})
