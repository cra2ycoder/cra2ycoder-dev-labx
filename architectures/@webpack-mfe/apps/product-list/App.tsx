import { APIProvider } from '@api/ecomm'
import ProductList from './components/ProductList'

function App() {
  return (
    <APIProvider>
      <ProductList />
    </APIProvider>
  )
}

export { App }
export default App
