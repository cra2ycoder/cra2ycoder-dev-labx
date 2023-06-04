/**
 * @note
 * nested promises
 */
const p1 = new Promise((res, rej) => {
  res(
    // child 1 promise
    new Promise((res1, rej1) => {
      res1(
        // child 2 promise
        new Promise((res2, rej2) => {
          // resolving promise
          setTimeout(() => {
            res2('done!')
          }, 50)
        })
      )
    })
  )
})

/**
 * @note
 * closely take a look, first two then methods are returning the promises
 * - we can use even 1 then() and 1 catch() too for nesting promises
 */
p1.then(x => x)
  .then(y => y)
  .then(msg => {
    console.log({ msg })
  })
  .catch(err => {
    console.log({ err })
  })
