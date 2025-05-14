const { longestCommonPrefix } = require('../excerices/longestCommonPrefix')

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  expect(longestCommonPrefix(['interstellar', 'internet', 'internal'])).toBe(
    'inter'
  )
  expect(longestCommonPrefix(['a'])).toBe('a')
  expect(longestCommonPrefix(['reflower', 'flow', 'flight'])).toBe('')
  expect(longestCommonPrefix(['aa', 'ab'])).toBe('a')
  expect(longestCommonPrefix(['c', 'ac', 'ccc'])).toBe('')
})
