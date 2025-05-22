import CounterWithReducer from '@/components/hooks/CounterWithReducer'
import CombineReducers from '@/components/hooks/CombineReducers'
import ForwardRef from '@/components/ForwardRef'

export default function hooks() {
  return (
    <>
      <h2>useReducer</h2>
      <CounterWithReducer />
      <hr />
      <h2>useReducer with multiple and combined approach</h2>
      <CombineReducers />
      <hr />
      <h2>forwardRef approach</h2>
      <ForwardRef />
    </>
  )
}
