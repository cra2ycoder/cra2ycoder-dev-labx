const { addDigits } = require('../excerices/addDigits')

test('addDigits', () => {
  expect(addDigits(0)).toBe(0)
  expect(addDigits(38)).toBe(2)
})
