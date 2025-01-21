import React, { Suspense, StrictMode } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router'
import { Header, Footer, PageLayout } from '@ui/components'

//remote Micro-frontend
const HomePage = React.lazy(() => import('home/App'))
const ProductListPage = React.lazy(() => import('productlist/App'))
const ProductPage = React.lazy(() => import('product/App'))

function Router() {
  const navigateTo = useNavigate()

  return (
    <StrictMode>
      <Header />
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
                <ProductListPage navigateTo={navigateTo} />
              </PageLayout>
            </Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PageLayout>
                <ProductPage navigateTo={navigateTo} useParams={useParams} />
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
      <Footer />
    </StrictMode>
  )
}

export default Router
