/**
 * @api
 * https://react.dev/reference/react/useSyncExternalStore#subscribing-to-an-external-store
 *
 * recommendation: use only react.js state
 */

let count = 0
let todos = []
let listeners = []

export const todoStore = {
  //add state
  addTodo() {
    todos = [...todos, { id: count++, title: `Todo # ${count}` }]

    dispatchListeners()
  },

  //listener => on every state changes
  subscribe(listener) {
    console.log({ listener })
    listeners = [...listeners, listener]

    return () => {
      // must function required to kill listeners
      listeners = listeners.filter(l => l !== listener)
    }
  },

  //snapshot of the data
  getSnapshot() {
    return todos
  },
}

function dispatchListeners() {
  for (let l of listeners) {
    l()
  }
}
