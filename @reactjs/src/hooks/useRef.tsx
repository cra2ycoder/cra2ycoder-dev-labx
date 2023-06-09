import React, { useRef } from 'react'

export function RefExample() {
  const inputRef = useRef(null)
  const divRef = useRef(null)

  const doFocus = () => {
    inputRef.current.focus()

    const dataSet = divRef.current.dataset
    console.log({ dataSet })
  }

  return (
    <div>
      <div
        ref={divRef}
        data-id="ref-0"
        data-name="ref-tech"
        data-isref={true}
      />
      <input ref={inputRef} />
      <button onClick={doFocus}>click</button>
    </div>
  )
}
