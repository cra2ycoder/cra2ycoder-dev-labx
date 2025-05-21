function throttle(fn, delay) {
  let timer = null

  return function (...args) => {
    if (timer === null) {
      // console.log(this)
      fn.apply(this, args)

      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}

const fireThrottle = throttle(() => {
  console.log(`calls certain declared interval time!!!`)
}, 500)

let infinityFn = setInterval(() => {
  fireThrottle()
}, 100)

let globalTimer = null
globalTimer = setTimeout(() => {
  clearTimeout(globalTimer)
  clearInterval(infinityFn)
  interval = null
  globalTimer = null
}, 1000)
