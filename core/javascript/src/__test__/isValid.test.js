const { isValid } = require('../excerices/isValid')

test('isValid', () => {
  expect(isValid('[]')).toBe(true)
  expect(isValid('()')).toBe(true)
  expect(isValid('()[]{}')).toBe(true)
  expect(isValid('(]')).toBe(false)
  expect(isValid('([])')).toBe(true)
})
