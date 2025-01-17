import React, { Suspense, StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer, PageLayout } from '@ui/components'

//remote Micro-frontend
const HomePage = React.lazy(() => import('homepage/App'))

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
                  <div>plp page</div>
                </PageLayout>
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PageLayout>
                  <div>product page</div>
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
