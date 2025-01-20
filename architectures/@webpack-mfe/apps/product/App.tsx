import { APIProvider } from '@api/ecomm'
import { MUIThemeProvider } from '@ui/components'
import Product from './components/Product'

function App() {
  return (
    <APIProvider>
      <MUIThemeProvider>
        <Product />
      </MUIThemeProvider>
    </APIProvider>
  )
}

export { App }
export default App
