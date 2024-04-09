'use client'

import React from 'react'
import Link from 'next/link'

function GraphPage() {
  return (
    <div>
      Graph Page
      <Link href="/dashboard/barchart">
        <button>Navigate To Bar Chart Page (Sub Route)</button>
      </Link>
    </div>
  )
}

export default GraphPage
