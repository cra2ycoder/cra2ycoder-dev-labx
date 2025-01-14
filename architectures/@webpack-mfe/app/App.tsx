import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

const domNode = document.getElementById('root')
if (domNode) {
  const root = createRoot(domNode)
  root.render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
