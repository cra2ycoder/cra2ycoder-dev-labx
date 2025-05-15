function longestPalindrome(s) {
  if (s.length === 1) {
    return 1
  }

  // counting the chars count
  // by putting into Map
  const sMap = new Map()
  for (const char of s) {
    const charCount = (sMap.get(char) || 0) + 1
    sMap.set(char, charCount)
  }

  let longestNumber = 0
  let hasOddCount = false

  sMap.forEach((count, key) => {
    // even chars are valid palindrome
    if (count % 2 === 0) {
      longestNumber += count
    } else {
      // odd chars when combine breaks palindrome
      // so removing one from it and addition into the count
      // as we do even counts
      longestNumber += count - 1
      hasOddCount = true
    }
  })

  // if hasOddCount is true then, still any one char can be inserted into middle
  // "abcccddc" => a:1, b:1, c:4, d:2 => ccdadcc
  // so adding that as well
  return hasOddCount ? longestNumber + 1 : longestNumber
}

module.exports = {
  longestPalindrome,
}
