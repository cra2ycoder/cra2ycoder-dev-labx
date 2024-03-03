import {
  ReadAndWriteState,
  GroupState,
  DefaultState,
  CDMLifeCycle,
  CDULifeCycle,
  CWUMLifeCycle,
  DynamicPropsLifeCycle,
  CustomHook,
  MemoExample,
  Parent as ContextParentExample,
  ReducerComponent,
  UseMemoExample,
  SearchBox,
  UseCallBackExample,
  RefExample,
  UseTransitionHookExample,
  UseDeferredValueExample,
} from '@/hooks'

export default function Hooks() {
  return (
    <>
      <h3>state: read & write</h3>
      <ReadAndWriteState />
      <hr />
      <h3>state: group</h3>
      <GroupState />
      <hr />
      <h3>state: default values</h3>
      <DefaultState />
      <hr />
      <h3>lifecycle: componentDidMount()</h3>
      <CDMLifeCycle />
      <hr />
      <h3>lifecycle: componentDidUpdate()</h3>
      <CDULifeCycle />
      <hr />
      <h3>lifecycle: componentWillUnMount()</h3>
      <CWUMLifeCycle />
      <hr />
      <h3>lifecycle: Dynamic props updates()</h3>
      <DynamicPropsLifeCycle />
      <hr />
      <h3>CustomHook</h3>
      <CustomHook />
      <hr />
      <h3>Memo Example</h3>
      <MemoExample />
      <hr />
      <h3>Context Parent Example</h3>
      <ContextParentExample />
      <hr />
      <h3>Reducers</h3>
      <ReducerComponent />
      <hr />
      <h3>Use Memo</h3>
      <UseMemoExample />
      <hr />
      <SearchBox />
      <hr />
      <h3>Use Callback</h3>
      <UseCallBackExample />
      <hr />
      <h3>Use Ref</h3>
      <RefExample />
      <hr />
      <h3>UseTransitionHookExample</h3>
      <UseTransitionHookExample />
      <hr />
      <h3>UseDeferredValueExample</h3>
      <UseDeferredValueExample />
    </>
  )
}
