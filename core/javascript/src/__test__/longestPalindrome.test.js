const { longestPalindrome } = require('../excerices/longestPalindrome')

test('longestPalindrome', () => {
  expect(longestPalindrome('abccccdd')).toBe(7)
  expect(longestPalindrome('a')).toBe(1)
})
