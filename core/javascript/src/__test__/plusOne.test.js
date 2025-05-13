const { plusOne } = require('../excerices/plusOne')

test('simple', () => {
  expect(plusOne([1, 1])).toStrictEqual([1, 2])
})

test('large tricky number', () => {
  expect(
    plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
  ).toStrictEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
})
