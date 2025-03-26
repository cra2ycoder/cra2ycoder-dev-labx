import React, { useState } from 'react'

interface ICounterProps {
  initialCount: number
}

export function Counter(props: ICounterProps) {
  const [count, setCount] = useState(props.initialCount)

  const doIncrease = () => {
    setCount(count + 1)
  }

  const doDecrease = () => {
    setCount(count - 1)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={doDecrease}>-</button>
      <div style={{ padding: '1rem' }}>{count}</div>
      <button onClick={doIncrease}>+</button>
    </div>
  )
}
