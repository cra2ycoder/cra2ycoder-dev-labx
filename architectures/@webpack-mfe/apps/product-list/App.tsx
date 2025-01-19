import { APIProvider } from '@api/ecomm'
import { MUIThemeProvider } from '@ui/components'
import ProductList from './components/ProductList'

function App() {
  return (
    <APIProvider>
      <MUIThemeProvider>
        <ProductList />
      </MUIThemeProvider>
    </APIProvider>
  )
}

export { App }
export default App
