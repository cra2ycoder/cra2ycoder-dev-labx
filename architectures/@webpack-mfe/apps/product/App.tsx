import { APIProvider } from '@api/ecomm'
import { MUIThemeProvider } from '@ui/components'
import Router from './Router'

function App() {
  return (
    <APIProvider>
      <MUIThemeProvider>
        <Router />
      </MUIThemeProvider>
    </APIProvider>
  )
}

export default App
