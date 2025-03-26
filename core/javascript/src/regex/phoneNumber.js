/**
 * !important
 * ^ - can start with `(` or not
 * \d only numbers
 * \) can close with `)` or not
 * \s space allowed
 * \d only numbers but limited with 10
 * $ - must be ended with only number
 */
const regex = /^\(?\+?\d+\)?\s\d{10}$/

const phoneNumbers = ['+91 1234567890', '(+91) 1234567890', '91 1234567890']

phoneNumbers.forEach(number => {
  console.log(regex.test(number))
  console.log(number.match(regex))
})
