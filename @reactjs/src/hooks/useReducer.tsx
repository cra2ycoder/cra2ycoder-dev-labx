import { useReducer } from 'react'

// export const reducerDefaultProps = () => {
//   return {
//     count: 0
//   };
// };

/**
 * @description
 * state actions declaration
 */
export enum COUNTER_ACTIONS {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

/**
 * @description
 * we can use this single state handler method
 * to update the state
 * we must return updated state else render will not works
 * @param state => which shared by reducer by automatically
 * @param actions => which will be shared when reducer dispatch
 *
 * best choice - when we requird to handle the complex state
 * - looks like Redux concept but its much straight forward
 */
export const reducerStateHandler = (state: any, actions: any) => {
  console.log({ state, actions })

  switch (actions.type) {
    case COUNTER_ACTIONS.INCREMENT:
    case COUNTER_ACTIONS.DECREMENT:
      state.count = actions.value
      break
  }

  return {
    ...state,
  }
}

export function ReducerComponent() {
  /**
   * @description
   * how we are declarting the useReducer
   * - similar like useState
   * - but state will be handled at our end by using dispatch method
   */
  const [reducerState, reducerStateDispatcher] = useReducer(
    reducerStateHandler,
    {
      count: 0,
    }
  )

  const doIncrement = () => {
    /**
     * @description
     * this is how we calling the dispatch function for state update
     * the object => is just actions
     * the object properties are not predefined and its customized by us.
     */
    reducerStateDispatcher({
      type: COUNTER_ACTIONS.INCREMENT,
      value: reducerState.count + 1,
    })
  }

  const doDecrement = () => {
    reducerStateDispatcher({
      type: COUNTER_ACTIONS.DECREMENT,
      value: reducerState.count - 1,
    })
  }

  return (
    <div>
      <p>{reducerState.count}</p>
      <div>
        <button onClick={doDecrement}>-</button>
        <button onClick={doIncrement}>+</button>
      </div>
    </div>
  )
}
