const { currying } = require('../tricks/currying')

test('currying', () => {
  expect(currying(1)(2)()).toBe(3)
  expect(currying(0)()).toBe(0)
  expect(currying(undefined)()).toBe(0)
  expect(currying(null)()).toBe(0)
  expect(currying(1)(2)(3)(4)()).toBe(10)
})
