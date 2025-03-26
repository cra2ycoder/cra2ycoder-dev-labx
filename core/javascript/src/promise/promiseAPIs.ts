/**
 * Promise APIs
 *
 * - Promise.all()
 * - Promise.allSettled()
 *
 * - Promise.race()
 * - Promise.any()
 *
 * - Promise.finally()
 * - Promise.resolve()
 * - Promise.reject()
 *
 */

Promise.reject(new Error('error'))
  .then(success => {
    console.log({ success })
  })
  .catch(err => {
    // error block will be executed
    console.log({ err })
  })

Promise.resolve(123)
  .then(success => {
    // success block will be executed
    console.log({ success })
  })
  .catch(err => {
    console.log({ err })
  })

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1)
  }, 100)
})

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2)
  }, 30)
})

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3)
  }, 10)
})

const promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    res(4)
  }, 200)
})

/**
 * @description
 *
 * - Promise.all() basically waits for all promise to be completed/resolved
 * - even one promise failed or thrown error - all() promise execution will be terminated
 * - and it will be jumped to catch() and followed by finally()
 * - if all the promises are resolved, result will be in array (ex: [1, 2, 3, 4] for below example)
 * - any promise can be resolved at any time like earlier or later, but the results will be considered in order/sequence way
 *
 */
Promise.all([promise1, promise2, promise3, promise4])
  .then(
    success => {
      console.log({ success })
    },
    err => {
      console.log({ err })
    }
  )
  .finally(() => {
    console.log('promise executions are done!')
  })

/**
 * @description
 *
 * - Promise.allSettled() - executes all promises
 * - whether its failed or succeeded everything will be collected as single value along with status
 * - and passed to then()
 * - there is no use of catch() function here
 * - results be like: [ { status: 'rejected', reason: 1 }, { status: 'fulfilled', reason: 3 },...]
 * - it will fire finally() if used
 */

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then(success => {
    console.log({ success })
  })
  .finally(() => {
    console.log('promise executions are done!')
  })

/**
 * @description
 *
 * Promise.any()
 *
 * found this error with typescript
 * error TS2550: Property 'any' does not exist on type 'PromiseConstructor'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2021' or later.
 *
 * => yet to be find the solution
 */

Promise.any([promise1, promise2, promise3, promise4])
  .then(success => {
    console.log({ success })
  })
  .catch(err => {
    console.log({ err })
  })
  .finally(() => {
    console.log('promise executions are done!')
  })
