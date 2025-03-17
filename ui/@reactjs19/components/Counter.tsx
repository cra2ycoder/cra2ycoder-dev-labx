'use client'

import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0)

  const doIncrement = () => {
    setCount(count + 1)
  }
  return <button onClick={doIncrement}>Click Me: {count}</button>
}

export default Counter
