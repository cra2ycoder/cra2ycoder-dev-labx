'use client'

import React, { useState } from 'react'

function DashboardMainPage() {
  const [count, setCount] = useState(0)
  return (
    <div>
      DashboardMainPage
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default DashboardMainPage
