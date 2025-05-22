'use client'

import { forwardRef, useRef } from 'react'

const CustomInputBox = forwardRef((props, ref) => {
  return (
    <label>
      <input ref={ref} />
    </label>
  )
})

function ForwardRef() {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <CustomInputBox ref={inputRef} label={'Enter Your Name'} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default ForwardRef
