import { useState, useTransition } from 'react'

export function UI({ value }) {
  console.log({ value })
  return (
    <div>
      {value &&
        Array(value)
          .fill(1)
          .map((x, idx) => <span key={`ui-${idx}`}> {value - idx} </span>)}
    </div>
  )
}

export function UseTransitionHookExample() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(10000)
  const [isPending, startTransition] = useTransition()

  const doIncrease = () => {
    setCount(count + 1)
    startTransition(() => setValue(value + 1))
  }

  return (
    <div>
      <button onClick={doIncrease}>Increase</button>
      <div>{isPending.toString()}</div>
      <div style={{ opacity: isPending ? 0.6 : 1 }}>
        <UI value={value} />
      </div>
    </div>
  )
}
