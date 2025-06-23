const { sumOfGoodNumbers } = require('../excerices/sumOfGoodNumbers')

test('sumOfGoodNumbers', () => {
  expect(sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2)).toBe(12)
  expect(sumOfGoodNumbers([2, 1], 1)).toBe(2)
})
