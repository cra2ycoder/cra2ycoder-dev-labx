import { useState, useDeferredValue, useEffect } from 'react'

function UseDeferredValueExample() {
  const [value, setValue] = useState(0)
  const prevValue = useDeferredValue(value)

  const doIncrease = () => {
    setValue(value + 1)
  }

  useEffect(() => {
    console.log({ prevValue })
  }, [prevValue])

  return (
    <>
      <button onClick={doIncrease}>Increase</button>
      <div>current value: {value}</div>
      <div>deferred value: {prevValue}</div>
    </>
  )
}

export { UseDeferredValueExample }
