import React, { Suspense, StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer, PageLayout } from '@ui/components'

//remote Micro-frontend
const HomePage = React.lazy(() => import('home/App'))
const ProductListPage = React.lazy(() => import('productlist/App'))
const ProductPage = React.lazy(() => import('product/App'))

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
                <PageLayout>
                  <HomePage />
                </PageLayout>
              </Suspense>
            }
          />
          <Route
            path="/plp"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PageLayout>
                  <ProductListPage />
                </PageLayout>
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PageLayout>
                  <ProductPage />
                </PageLayout>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PageLayout>
                  <div>not found!</div>
                </PageLayout>
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
