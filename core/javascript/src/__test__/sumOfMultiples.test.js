const { sumOfMultiples } = require('../excerices/sumOfMultiples')

test('sumOfMultiples', () => {
  expect(sumOfMultiples(7)).toBe(21)
  expect(sumOfMultiples(10)).toBe(40)
  expect(sumOfMultiples(9)).toBe(30)
})
