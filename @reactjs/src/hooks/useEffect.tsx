import { useEffect, useState } from 'react'

/**
 * @description
 * componentDidMount() with Hooks
 */
export function CDMLifeCycle() {
  const [state, setState] = useState<string>('')

  useEffect(() => {
    setState('Component Mounted!')
  }, [])

  return <div>{state}</div>
}

/**
 * @description
 * componentDidUpdate() with Hooks
 */
export function CDULifeCycle() {
  const [count, setCount] = useState<number>(0)
  const [state, setState] = useState<string>('initial')

  const doIncrement = () => {
    setCount(count + 1)
  }

  const doDecrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    if (count >= 5) {
      setState('max limit reached!')
    } else if (count < 0) {
      setState('min limit should be 0')
    } else {
      setState('value accepted')
    }
  }, [count])

  return (
    <>
      <div>{count}</div>
      <p>state: {state}</p>
      <button onClick={doIncrement}>+</button>
      <button onClick={doDecrement}>-</button>
    </>
  )
}

function TestComponent() {
  const [state, setState] = useState<string>('')

  useEffect(() => {
    return () => {
      console.log({ state })
      setState('TestComponent unmount!')
    }
  })

  useEffect(() => {
    setState('TestComponent mounted!')
  }, [])

  return <div>{state}</div>
}

/**
 * @description
 * componentWillUnMount() with Hooks
 */
export function CWUMLifeCycle() {
  const [shouldRemove, setShouldRemove] = useState<boolean>(false)
  const toggleComponent = () => {
    setShouldRemove(!shouldRemove)
  }

  return (
    <>
      {shouldRemove === false && <TestComponent />}
      <button onClick={toggleComponent}>toggle component</button>
    </>
  )
}

/**
 * @description
 * lifecycle trick for dynamic props
 */

interface IDynamicPropsUpdate {
  count?: number
}

export function DynamicPropsWithNoUpdate(props: IDynamicPropsUpdate) {
  const [count, setCount] = useState<number>(props.count)
  return <div>[child] Dynamic Props with no update: {count}</div>
}

export function DynamicPropsWithUpdate(props: IDynamicPropsUpdate) {
  const [count, setCount] = useState<number>(props.count)

  /**
   * @description
   * this lifecycle helps to update the internal state props
   */
  useEffect(() => {
    if (props.count !== count) {
      setCount(props.count)
    }
  }, [props.count])

  return <div>[child] Dynamic props with update: {count}</div>
}

export function DynamicPropsLifeCycle() {
  const [length, setLength] = useState<number>(0)

  return (
    <>
      <DynamicPropsWithNoUpdate count={length} />
      <DynamicPropsWithUpdate count={length} />
      <div>[parent]: {length}</div>
      <button onClick={() => setLength(length + 1)}>+</button>
      <button onClick={() => setLength(length - 1)}>-</button>
    </>
  )
}
