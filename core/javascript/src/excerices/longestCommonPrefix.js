function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return ''
  }

  if (strs.length === 1) {
    return strs[0]
  }

  // sorting the strings to bring the smallest word into first
  strs = strs.sort((a, b) => a.length - b.length)

  let toBeMatched = strs[0]

  // reverse loop
  for (let i = toBeMatched.length - 1; i >= 0; i--) {
    // matching the string with the strings array
    // mainly with indexOf and that should be zero only
    const filteredStr = strs.filter(x => x.indexOf(toBeMatched) === 0)

    // filtered str and the total strs length should be equal if so, maximum prefix str found
    if (filteredStr.length === strs.length) {
      return toBeMatched
    } else {
      // slice the word from last by one one character
      toBeMatched = toBeMatched.slice(0, -1)
    }
  }

  return ''
}

module.exports = {
  longestCommonPrefix,
}
