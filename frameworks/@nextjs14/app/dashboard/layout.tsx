'use client'

import React from 'react'

function DashboardLayoutPage({ children, analytics, graph, metrics }) {
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
      {children}
      <div className="slot">{analytics}</div>
      <div className="slot">{graph}</div>
      <div className="slot">{metrics}</div>
    </div>
  )
}

export default DashboardLayoutPage
