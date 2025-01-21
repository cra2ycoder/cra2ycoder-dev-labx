import { APIProvider } from '@api/ecomm'
import { MUIThemeProvider } from '@ui/components'
import Product from './components/Product'

function App(props: any) {
  const pathParams = props?.useParams()

  return (
    <APIProvider>
      <MUIThemeProvider>
        <Product pathParams={pathParams} />
      </MUIThemeProvider>
    </APIProvider>
  )
}

export { App }
export default App
