import { lazy, Suspense } from 'react'

const LazyLoadShape = lazy(() => import('../code/codesplit/Shape'))
const LazyLoadPosts = lazy(() => import('../code/codesplit/Posts'))

export default function CodeSplit() {
  return (
    <Suspense fallback={<div>importing...</div>}>
      <LazyLoadShape />
      <LazyLoadPosts />
    </Suspense>
  )
}
