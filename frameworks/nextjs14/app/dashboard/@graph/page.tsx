'use client'

import React, { useState } from 'react'
import Link from 'next/link'

function GraphPage() {
  console.log('GraphPage >>> re-rendering....')

  const [count, setCount] = useState<number>(0)

  return (
    <div>
      Graph Page
      <p>{count}</p>
      <Link href="/dashboard/barchart">
        <button>Navigate To Bar Chart Page (Sub Route)</button>
      </Link>
      <button onClick={() => setCount(count => count + 1)}>
        Increase Count
      </button>
    </div>
  )
}

export default GraphPage
