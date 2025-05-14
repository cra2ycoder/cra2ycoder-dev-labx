const { romanToInt } = require('../excerices/romanToInt')

test('romanToInt', () => {
  expect(romanToInt('III')).toBe(3)
  expect(romanToInt('LVIII')).toBe(58)
  expect(romanToInt('MCMXCIV')).toBe(1994)
})
