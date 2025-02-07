import React, { Suspense, StrictMode } from 'react'
import {
  Routes,
  Route,
  // useNavigate,
  useParams,
  // Outlet,
  MemoryRouter,
} from 'react-router'

const Product = React.lazy(() => import('./components/Product'))

function Router() {
  //   const navigateTo = useNavigate()
  const pathParams = useParams()

  console.log('page loading....')

  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <MemoryRouter>
          <Routes>
            <Route path="/:id" element={<Product pathParams={pathParams} />} />
            {/* <Route path="/*" element={<div></div>}></Route> */}
          </Routes>
        </MemoryRouter>
      </Suspense>
    </StrictMode>
  )
}

export default Router
