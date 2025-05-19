const { climbStairs } = require('../excerices/claimStairs')

test('climb stairs', () => {
  expect(climbStairs(2)).toBe(2)
  expect(climbStairs(3)).toBe(3)
  expect(climbStairs(5)).toBe(8)
})
