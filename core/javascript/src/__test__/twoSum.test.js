const { twoSum } = require('../excerices/twoSum')

test('with empty array', () => {
  expect(twoSum([])).toStrictEqual(0)
})

test('with float point values', () => {
  expect(twoSum([1, 5.2, 4, 0, -1])).toStrictEqual(9.2)
})
