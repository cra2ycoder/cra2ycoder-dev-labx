function lengthOfLastWord(s: string): number {
  const withNoSpaces = s.split(' ').filter(Boolean)
  return withNoSpaces[withNoSpaces.length - 1].length
}

module.exports = {
  lengthOfLastWord,
}
