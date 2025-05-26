function findTheDifference(s, t) {
  // for(let i=0; i<s.length; i++) {
  //      t = t.replace(s[i], '')
  // }
  // return t

  const charCount = {}
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    charCount[c] = (charCount[c] || 0) + 1
  }

  for (let j = 0; j < t.length; j++) {
    let cc = t[j]
    if (!charCount[cc]) {
      return cc
    }
    charCount[cc] -= 1
  }
}

module.exports = {
  findTheDifference,
}
