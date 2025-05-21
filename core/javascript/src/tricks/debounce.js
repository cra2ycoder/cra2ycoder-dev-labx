function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      console.log(this)
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

const fireDebounce = debounce(function () {
  console.log(
    'This will be called only when the timeout is running completely!'
  )
}, 1000)

let infinityFn = setInterval(() => {
  fireDebounce()
}, 100)

let globalTimer = null
globalTimer = setTimeout(() => {
  clearTimeout(globalTimer)
  clearInterval(infinityFn)
  interval = null
  globalTimer = null
}, 1000)
