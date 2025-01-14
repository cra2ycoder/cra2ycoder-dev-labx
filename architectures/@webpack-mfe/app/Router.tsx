import { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Suspense fallback={<div>Loading...</div>}>
          <div>home</div>
        </Suspense>
      </Route>
      <Route path="/productlist">
        <Suspense fallback={<div>Loading...</div>}>
          <div>product-list</div>
        </Suspense>
      </Route>
      <Route path="/product">
        <Suspense fallback={<div>Loading...</div>}>
          <div>product</div>
        </Suspense>
      </Route>
    </BrowserRouter>
  )
}

export default Router
