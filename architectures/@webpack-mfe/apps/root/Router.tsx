import React, { Suspense, StrictMode } from 'react'
import { Routes, Route, useNavigate, useParams, Outlet } from 'react-router'
import { Header, Footer, PageLayout } from '@ui/components'

//remote Micro-frontend
const HomePage = React.lazy(() => import('home/App'))
const ProductListPage = React.lazy(() => import('productlist/App'))
const ProductPage = React.lazy(() => import('product/App'))

function Router() {
  const navigateTo = useNavigate()

  console.log('coming')

  return (
    <StrictMode>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Outlet />
              </PageLayout>
            }
          >
            <Route index element={<HomePage />} />
            <Route
              path="/plp"
              element={<ProductListPage navigateTo={navigateTo} />}
            />
            <Route
              path="/product/*"
              element={
                <ProductPage navigateTo={navigateTo} useParams={useParams} />
              }
            />
            <Route path="*" element={<div>page not found</div>} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </StrictMode>
  )
}

export default Router
