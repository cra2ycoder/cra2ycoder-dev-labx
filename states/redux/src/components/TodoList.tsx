import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTask, TTodoItem } from '../store/todoSlice'
import { AppRootState } from '../store/appStore'
import TodoItem from './TodoItem'

function TodoList() {
  const dispatch = useDispatch()
  const list: TTodoItem[] = useSelector(
    (state: AppRootState) => state.todo.list
  )

  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCreateTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current as HTMLFormElement)
    const userInput = formData.get('task')

    if (userInput) {
      //@todo post the data to save into state
      dispatch(createTask(userInput))
      inputRef.current.value = ''
    }
  }

  return (
    <div className="flex w-full flex-wrap">
      <pre>{JSON.stringify(list)}</pre>
      <form
        action="#"
        className="w-full flex flex-wrap gap-2 items-center"
        id="task-form"
        ref={formRef}
      >
        <label htmlFor="task" id="task">
          Enter your task:
        </label>
        <input
          ref={inputRef}
          type="text"
          name="task"
          id="task"
          className="border rounded-md w-dvw h-[40px] border-gray-300 px-4"
        />
        <button
          className="border rounded-md bg-black text-white py-2 px-4 text-sm cursor-pointer"
          onClick={handleCreateTask}
        >
          Create a Task
        </button>
      </form>
      <div className="h-[1px] w-full bg-gray-300 my-4" />
      <ul className="w-full">
        {list?.map((item: TTodoItem, idx: number) => (
          <TodoItem key={`todo-${idx}`} task={item.task} id={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
