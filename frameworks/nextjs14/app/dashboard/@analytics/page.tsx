'use client'

import React, { useState } from 'react'

function AnalyticsPage() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>{count}</h1>
      <div>Analytics Page</div>
      <button onClick={() => setCount(count => count + 1)}>
        increase value
      </button>
    </div>
  )
}

export default AnalyticsPage
