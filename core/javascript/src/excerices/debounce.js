function debounce(func, waitInMs) {
  let timer = null

  return () => {
    clearTimeout(timer)
    timer = setTimeout(func, waitInMs)
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
