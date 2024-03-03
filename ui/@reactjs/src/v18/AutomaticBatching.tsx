import React, { useEffect, useState } from 'react'

function AutomaticBatching() {
  /**
   * @here
   * we are declaring multiple states here
   *
   * problem expected is:
   * every state updated is re-renders multiple times
   *
   * below are the sample states
   */
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(1)
  const [state3, setState3] = useState({ name: '' })

  useEffect(() => {
    setTimeout(() => {
      /**
       * solution is:
       * React v18 comes with Automatic Batching feature as OOTB
       * this prevents multiple rendering the component for every state change
       *
       * below 3 setState required to be rendered at one time
       * so, re-rendering process will be initiated only after 3 states got updated
       *
       */
      setState1(true) // react < v18: 1st time re-render, but > v18 it doesn't
      console.log('1st state update initiated...!')

      setState2(2) // react < v18: 2nd time re-render, but > v18 it doesn't
      console.log('2nd state update initiated...!')

      setState3({ name: 'react v18' }) // react < v18: 3rd time re-render, but > v18 it doesn't
      console.log('3rd state update initiated...!')

      /**
       * @description
       * to see the output, please check the console, where 1 rendering only will be done
       * after all the state got updated
       */
      console.log('3 states updated!!!')
    }, 300)
  }, [])

  return (
    <>
      <h4>Automatic Batching</h4>
      <div>
        <div>{console.log('rendering...!!!')}</div>
        state1: {state1.toString()} / state2: {state2} / state3:
        {JSON.stringify(state3)}
      </div>
    </>
  )
}

export default AutomaticBatching
