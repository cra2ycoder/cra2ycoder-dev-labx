const { twoSum } = require('../excerices/twoSum')

test('twoSum', () => {
  expect(twoSum([])).toStrictEqual(0)
  expect(twoSum([1, 5.2, 4, 0, -1])).toStrictEqual(9.2)
})
