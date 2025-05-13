const { timeConversion } = require('../excerices/timeConversion')

test('12:00:00AM', () => {
  expect(timeConversion('12:00:00AM')).toBe('00:00:00')
})

test('12:01:00PM', () => {
  expect(timeConversion('12:01:00PM')).toBe('12:01:00')
})

test('03:10:20PM', () => {
  expect(timeConversion('03:10:20PM')).toBe('15:10:20')
})

test('06:40:03AM', () => {
  expect(timeConversion('06:40:03AM')).toBe('06:40:03')
})
