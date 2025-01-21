import { APIProvider } from '@api/ecomm'
import { MUIThemeProvider } from '@ui/components'
import ProductList from './components/ProductList'

function App(props: any) {
  const navigateToProductPage = (id: any) => {
    props.navigateTo(`/product/${id}`)
  }

  return (
    <APIProvider>
      <MUIThemeProvider>
        <ProductList onClick={navigateToProductPage} />
      </MUIThemeProvider>
    </APIProvider>
  )
}

export { App }
export default App
