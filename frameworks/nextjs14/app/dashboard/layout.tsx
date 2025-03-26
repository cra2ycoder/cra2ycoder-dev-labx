'use client'

import React, { useState } from 'react'

function DashboardLayoutPage({ children, analytics, graph, metrics }) {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="dashboard-parent">
      <style jsx>{`
        .dashboard-parent {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        .slot {
          width: 35%;
          height: 400px;
          border: 1px solid;
        }
      `}</style>
      <h1>Dashboard Layout Page</h1>
      <h2>layout: {count}</h2>
      {children}
      <div className="slot">{analytics}</div>
      <div className="slot">{graph}</div>
      <div className="slot">{metrics}</div>
      <button onClick={() => setCount(count => count + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default DashboardLayoutPage
