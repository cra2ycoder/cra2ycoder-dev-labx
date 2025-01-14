import React from 'react'
import { Metadata } from 'next'

/**
 * @note
 * static metadata example
 */
export const metadata: Metadata = {
  title: 'Meta Page Example Title',
  description: 'Meta Page Example Description',
}

function MetaPage() {
  return <div>MetaPage</div>
}

export default MetaPage
