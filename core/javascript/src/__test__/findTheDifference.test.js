const { findTheDifference } = require('../excerices/findTheDifference')

test('findTheDifference', () => {
  expect(findTheDifference('abcd', 'abcde')).toBe('e')
  expect(findTheDifference('', 'y')).toBe('y')
})
