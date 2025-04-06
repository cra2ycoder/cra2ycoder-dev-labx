import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import { appStore } from './store/appStore'
import './App.css'

function App() {
  return (
    <Provider store={appStore}>
      <TodoList />
    </Provider>
  )
}

export default App
