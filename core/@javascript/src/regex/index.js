/**
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * REGEX
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 *
 * ONLY CHARACTER BASED EXAMPLES
 */

const stringToBeMatched =
  'this is a test string to be matched with regex pattern'

// Simple regex pattern to match 'test' in a string (string matching)
const exactMatch = /test/
console.log(exactMatch.test(stringToBeMatched)) // true

// any one char match or exact match
const anyOneCharFromGiven = /[abcd]/
console.log(anyOneCharFromGiven.test(stringToBeMatched)) // true

// any one character matching between a to z (note: only lower case characters)
const anyOneCharMatch = /[a-z]/
console.log(anyOneCharMatch.test(stringToBeMatched)) // true

// any one character matching between a to z or A to Z (case insensitive)
const anyOneCharCaseInsensitiveMatch = /[a-zA-Z]/
console.log(anyOneCharCaseInsensitiveMatch.test(stringToBeMatched)) // true

// case sensitive match (a to z or A to Z both cases are allowed to match)
const anyOneCharCaseInsensitiveMatch1 = /[a-z]/i
console.log(anyOneCharCaseInsensitiveMatch1.test(stringToBeMatched)) // true

// only char(s) matching incl. numbers but with no spaces and no special characters
const wordMatch = /\w+/g
console.log(wordMatch.test(stringToBeMatched)) // true

// a char to be twice time repeated (must) 'aa'
const charLengthLimit = /a{2}/

// minimum one `a` and can be repeated 'n' of times
const charNoLengthLimit = /a{1,}/

console.log(charLengthLimit.test(stringToBeMatched)) // false
console.log(charNoLengthLimit.test(stringToBeMatched)) // true
