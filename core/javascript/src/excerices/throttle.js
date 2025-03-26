function throttle(func, intervalInMs) {
  let timer = null

  return () => {
    if (timer === null) {
      func()
      timer = setTimeout(() => {
        timer = null
      }, intervalInMs)
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
