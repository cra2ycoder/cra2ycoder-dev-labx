import CounterWithReducer from '@/components/hooks/CounterWithReducer'
import CombineReducers from '@/components/hooks/CombineReducers'

export default function hooks() {
  return (
    <>
      <CounterWithReducer />
      <hr />
      <CombineReducers />
    </>
  )
}
