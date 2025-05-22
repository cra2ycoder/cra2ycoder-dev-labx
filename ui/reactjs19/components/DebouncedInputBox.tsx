'use client'

import { useRef, useState } from 'react'

function throttle(fnc: Function, interval: number) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (...args) {
    if (timer === null) {
      fnc.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, interval)
    }
  }
}

function debounce(fnc: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (...args: any) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fnc.apply(this, args)
    }, delay)
  }
}

function DebouncedInputBox() {
  const inputRef = useRef(null)
  const [type, setType] = useState('throttle')

  const getInput = () => {
    console.log(inputRef.current.value)
  }

  const dynamicHandler =
    type === 'throttle' ? throttle(getInput, 100) : debounce(getInput, 300)

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <label htmlFor="search">
        Debounce Input Box:
        <input
          ref={inputRef}
          type="text"
          id="search"
          name="search"
          onChange={dynamicHandler}
        />
      </label>
      <button
        onClick={() => {
          setType(type === 'throttle' ? 'debounce' : 'throttle')
        }}
      >
        {`Switch To `}
        {(type === 'throttle' ? 'debounce' : 'throttle').toUpperCase()}
      </button>
    </div>
  )
}

export default DebouncedInputBox
