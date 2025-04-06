import { useRef } from 'react'

type TTodoItem = {
  label?: string
}

function TodoItem(props: Readonly<TTodoItem>) {
  const editTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`edit task`)
  }

  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`delete task`)
  }

  return (
    <>
      <li className="flex items-center justify-between w-full">
        <p className="">{props.label}</p>
        <div className="flex gap-2">
          <button
            className="border rounded-md bg-black text-white py-2 px-4 text-sm"
            onClick={editTask}
          >
            Edit
          </button>
          <button
            className="border rounded-md bg-black text-white py-2 px-4 text-sm"
            onClick={deleteTask}
          >
            Delete
          </button>
        </div>
      </li>
      <div className="h-[1px] w-full bg-gray-300 my-4" />
    </>
  )
}

function TodoList() {
  const formRef = useRef<HTMLFormElement>(null)
  const list: string[] = []

  const createTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current as HTMLFormElement)
    const userInput = formData.get('task')

    if (userInput) {
      //@todo post the data to save into state
    }
  }

  return (
    <div className="flex w-full flex-wrap">
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
          type="text"
          name="task"
          id="task"
          className="border rounded-md w-dvw h-[40px] border-gray-300 px-4"
        />
        <button
          className="border rounded-md bg-black text-white py-2 px-4 text-sm cursor-pointer"
          onClick={createTask}
        >
          Create a Task
        </button>
      </form>
      <div className="h-[1px] w-full bg-gray-300 my-4" />
      <ul className="w-full">
        {list.map((task: string, idx: number) => (
          <TodoItem key={`todo-${idx}`} label={task} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
