import { Suspense, StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>home</div>
              </Suspense>
            }
          />
          <Route
            path="/productlist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>product-list</div>
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>product</div>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

export default Router
