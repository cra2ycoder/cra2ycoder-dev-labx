const { findNonRepeatString } = require('../excerices/findNonRepeatString')

test('findNonRepeatString', () => {
  expect(findNonRepeatString('geeksforgeeks')).toBe('f')
  expect(findNonRepeatString('racecar')).toBe('e')
  expect(findNonRepeatString('aabbccc')).toBe('$')
})
