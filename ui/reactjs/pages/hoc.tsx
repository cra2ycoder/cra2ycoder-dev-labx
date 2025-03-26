import { TodoList, PostList } from '@/hoc/example'

export default function Hoc() {
  return (
    <>
      <h4>Todo List with HOC:</h4>
      <TodoList />
      <hr />
      <h4>Post List with HOC:</h4>
      <PostList />
    </>
  )
}
