function timeConversion(s) {
  const time = s.slice(0, 8).trim()
  const session = s.slice(8, s.length).trim()
  const [hour, min, sec] = time.split(':')

  let rHour = 0
  const convert = val => (val < 10 ? '0' + val : val)

  if (session === 'AM' && hour === '12') {
    rHour = '00'
  } else {
    if (session === 'PM') {
      if (+hour < 12) {
        rHour = convert(12 + +hour)
      } else {
        rHour = convert(+hour)
      }
    } else {
      rHour = convert(+hour)
    }
  }

  return `${rHour}:${convert(+min)}:${convert(+sec)}`
}

module.exports = {
  timeConversion,
}
