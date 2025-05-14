const { longestCommonPrefix } = require('../excerices/longestCommonPrefix')

test('["flower","flow","flight"]', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
})

test('["dog","racecar","car"]', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
})

test('["interstellar", "internet", "internal"]', () => {
  expect(longestCommonPrefix(['interstellar', 'internet', 'internal'])).toBe(
    'inter'
  )
})

test('["a"]', () => {
  expect(longestCommonPrefix(['a'])).toBe('a')
})

test('["reflower","flow","flight"]', () => {
  expect(longestCommonPrefix(['reflower', 'flow', 'flight'])).toBe('')
})

test('["aa","ab"]', () => {
  expect(longestCommonPrefix(['aa', 'ab'])).toBe('a')
})

test('["c","ac", "ccc"]', () => {
  expect(longestCommonPrefix(['c', 'ac', 'ccc'])).toBe('')
})
