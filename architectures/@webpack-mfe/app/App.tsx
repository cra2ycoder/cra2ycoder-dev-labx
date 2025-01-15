import { createRoot } from 'react-dom/client'
import Router from './Router'

const domNode = document.getElementById('root')
if (domNode) {
  const root = createRoot(domNode)
  root.render(<Router />)
}
