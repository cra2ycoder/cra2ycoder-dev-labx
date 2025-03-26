import { lazy, Suspense } from 'react'

const LazyLoadShape = lazy(() => import('@/codesplit/Shape'))
const LazyLoadPosts = lazy(() => import('@/codesplit/Posts'))

export default function CodeSplit() {
  return (
    <Suspense fallback={<div>importing...</div>}>
      <LazyLoadShape />
      <LazyLoadPosts />
    </Suspense>
  )
}
