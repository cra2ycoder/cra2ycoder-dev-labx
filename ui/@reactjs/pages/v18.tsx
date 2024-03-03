import React from 'react'
import AutomaticBatching from '@/v18/AutomaticBatching'
import UseTransitions from '@/v18/useTransition'
import UseDebugValue from '@/v18/useDebugValue'
import UseSyncExternalStore from '@/v18/useSyncExternalStore'

function v18() {
  return (
    <div>
      <AutomaticBatching />
      <hr />
      <UseTransitions />
      <hr />
      <UseDebugValue />
      <hr />
      <UseSyncExternalStore />
    </div>
  )
}

export default v18
