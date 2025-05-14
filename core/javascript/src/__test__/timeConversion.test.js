const { timeConversion } = require('../excerices/timeConversion')

test('timeConversion', () => {
  expect(timeConversion('12:00:00AM')).toBe('00:00:00')
  expect(timeConversion('12:01:00PM')).toBe('12:01:00')
  expect(timeConversion('03:10:20PM')).toBe('15:10:20')
  expect(timeConversion('06:40:03AM')).toBe('06:40:03')
})
