const { fibonacci } = require('../excerices/fibonacci')

test('fibonacci', () => {
  expect(fibonacci(2)).toBe(1)
  expect(fibonacci(3)).toBe(2)
  expect(fibonacci(4)).toBe(3)
})
