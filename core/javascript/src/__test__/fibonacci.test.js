const { fibonacci } = require('../excerices/fibonacci')

test('fibonacci', () => {
  expect(fibonacci(7)).toBe(13)
})
