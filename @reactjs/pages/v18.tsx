import React from 'react'
import AutomaticBatching from '@/v18/AutomaticBatching'
import UseTransitions from '@/v18/useTransition'
import UseDebugValue from '@/v18/useDebugValue'

function v18() {
  return (
    <div>
      <AutomaticBatching />
      <hr />
      <UseTransitions />
      <hr />
      <UseDebugValue />
    </div>
  )
}

export default v18
