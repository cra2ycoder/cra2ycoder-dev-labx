'use client'

import React, { useState } from 'react'

function ProgressBar() {
  return (
    <div className="track">
      <div className="filler" />
    </div>
  )
}

function ProgressBarList() {
  const [progressBarCount, setProgressBarCount] = useState<number>(0)

  return (
    <div>
      <button
        onClick={() => {
          setProgressBarCount(progressBarCount => progressBarCount + 1)
        }}
      >
        Add
      </button>
      <div className="progress-bar-list">
        {Array.from({ length: progressBarCount }, (x, index) => (
          <ProgressBar key={`progress-bar-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default ProgressBarList
