import React, { useSyncExternalStore } from 'react'
import { todoStore } from '../externalstore/todo'

function UseSyncExternalStore() {
  const todoExternalState = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot,
    todoStore.getSnapshot
  )

  console.log({ todoExternalState })

  return (
    <div>
      <button onClick={() => todoStore.addTodo()}>Add Todo</button>
      <hr />
      <ul>
        {todoExternalState.map(x => (
          <li id={x.id}>{x.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseSyncExternalStore
