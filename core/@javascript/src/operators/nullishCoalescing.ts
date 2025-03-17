// checks null or undefined only
// if found > right-side operand returned
// if not > left-size side operand returned

// scenario1:
const sc1 = null ?? undefined
console.log(sc1) // returns `undefined`

const sc2 = undefined ?? null
console.log(sc2) // return 'null'

const sc3 = 0 ?? 10
console.log(sc3) // return 0

const sc4 = '' ?? 'welcome'
console.log(sc4) // returns ''
