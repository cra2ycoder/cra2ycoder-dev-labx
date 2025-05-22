'use client'

import { useReducer } from 'react'

function getComponentReducer1(state, action) {
  if (action.type === 'toggle') {
    // console.log(`getComponentReducer1 >>>>`, { state, action })
    return { ...state, toggle: state.toggle === 'off' ? 'on' : 'off' }
  }
  return state
}

function getComponentReducer2(state, action) {
  // console.log(`getComponentReducer2 >>>>`, { state, action })

  if (action.type === 'clear-message') {
    return {
      ...state,
      message: '',
    }
  }

  return state
}

function getReducersList(state, action) {
  return {
    component1: getComponentReducer1(state.component1, action),
    component2: getComponentReducer2(state.component2, action),
  }
}

function CombineReducers() {
  const [state, dispatch] = useReducer(getReducersList, {
    component1: { toggle: 'off' },
    component2: { message: 'test message' },
  })

  const toggleState = () => {
    dispatch({
      type: 'toggle',
    })
  }

  const clearMessage = () => {
    dispatch({
      type: 'clear-message',
    })
  }

  return (
    <div>
      <div>{JSON.stringify(state)}</div>
      <div>
        <button onClick={toggleState}>
          {state.component1?.toggle.toUpperCase()}
        </button>
      </div>
      <div>
        <p>{state.component2?.message}</p>
        <button onClick={clearMessage}>Clear Message</button>
      </div>
    </div>
  )
}

export default CombineReducers
