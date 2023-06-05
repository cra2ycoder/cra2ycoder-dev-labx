const example1 = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   reject('failed')
  // }, 50)

  setTimeout(() => {
    resolve('success')
  }, 100)
})

/**
 * @note
 * TYPE 1
 */
example1.then(
  msg => {
    // full-filled or succeeded
    console.log({ msg })
  },
  err => {
    // failed or error thrown
    console.log({ err })
  }
)

/**
 * @note
 * TYPE 2
 */
example1
  .then(x => {
    // success zone
    console.log(x)
  })
  .catch(err => {
    // error zone
    console.log(err)
  })
