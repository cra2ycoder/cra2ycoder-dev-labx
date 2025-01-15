import { Suspense, StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@ui/components'

/**
 *
 * @todo to be imported with mfe
 */
// import HomePage from './pages/HomePage'
// import ProductList from './pages/ProductList'
// import Product from './pages/Product'

function Router() {
  return (
    <StrictMode>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>home page</div>
              </Suspense>
            }
          />
          <Route
            path="/plp"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>plp page</div>
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>product page</div>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>not found!</div>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </StrictMode>
  )
}

export default Router
