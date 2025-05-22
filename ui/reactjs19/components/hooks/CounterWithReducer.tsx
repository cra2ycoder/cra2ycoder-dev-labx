'use client'

import { useReducer } from 'react'

type TStateProps = {
  count: number
}

type TActionProps = {
  type: 'increment' | 'decrement'
}

function counterReducer(state: TStateProps, actions: TActionProps) {
  // console.log(state, actions)
  if (actions.type === 'increment') {
    // !!! to be strictly avoided, where it modifies the original state
    // state.count += 1

    return { ...state, count: state.count + 1 }
  }

  if (actions.type === 'decrement') {
    return {
      ...state,
      count: state.count - 1,
    }
  }

  // default case
  return state
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  })

  const incrementCount = () => {
    dispatch({
      type: 'increment',
    })
  }

  const decrementCount = () => {
    dispatch({
      type: 'decrement',
    })
  }

  return (
    <>
      <style>{`
        .pr-counter {
          display: flex;
          gap: 1rem;
          align-items: center;
          max-height: 60px;
        }
      `}</style>
      <div className="pr-counter">
        <button
          className="btn"
          onClick={() => {
            decrementCount()
          }}
        >
          -
        </button>
        <p className="label-counter">{state.count}</p>
        <button
          className="btn"
          onClick={() => {
            incrementCount()
          }}
        >
          +
        </button>
      </div>
    </>
  )
}

export { counterReducer }
export default CounterWithReducer
