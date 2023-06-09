import React, { useContext } from 'react'
import { useAPIHook, IAPIHookResponseProps } from './customHook'

export const ComponentContext = React.createContext({} as any)

export function Child1() {
  const { fetchedResponse: { userId = 0 } = {} } = useContext(ComponentContext)
  return <div>{userId}</div>
}

export function Child2() {
  const { fetchedResponse: { title = '' } = {} } = useContext(ComponentContext)
  return <div>{title}</div>
}

export function Child3() {
  const { fetchedResponse: { completed = false } = {} } =
    useContext(ComponentContext)
  return <div>{completed.toString()}</div>
}

export function Parent() {
  const todoAPI: IAPIHookResponseProps = useAPIHook({
    url: 'https://jsonplaceholder.typicode.com/todos/10',
  })

  return (
    <ComponentContext.Provider value={todoAPI}>
      <Child1 />
      <Child2 />
      <Child3 />
    </ComponentContext.Provider>
  )
}
