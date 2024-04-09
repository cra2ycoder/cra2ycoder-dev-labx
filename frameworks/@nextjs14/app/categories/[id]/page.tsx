import React from 'react'
import { Metadata } from 'next'

/**
 * @note
 * dynamic metadata example
 */
export const generateMetadata = (params): Metadata => {
  return {
    title: `Dynamic Page Example Title ${params.id}`,
    description: `Dynamic Page Example Description`,
  }
}

/**
 * @note
 * dynamic metadata example
 * with async and await
 */

// export const generateMetadata = async (params): Promise<Metadata> => {
//   const title: string = await new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Dynamic Page Example Title ${params.id}`)
//     }, 100)
//   })

//   return {
//     title,
//     description: `Dynamic Page Example Description`,
//   }
// }

function DynamicPage({ params }) {
  return (
    <>
      <div>DynamicPage === {params.id}</div>
    </>
  )
}

export default DynamicPage
