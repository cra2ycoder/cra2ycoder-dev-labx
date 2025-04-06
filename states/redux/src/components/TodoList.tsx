type TTodoItem = {
  label?: string
}

function TodoItem(props: Readonly<TTodoItem>) {
  return (
    <>
      <li className="flex items-center justify-between w-full">
        <p className="">{props.label}</p>
        <div className="flex gap-2">
          <button className="border rounded-md bg-black text-white py-2 px-4 text-sm">
            Edit
          </button>
          <button className="border rounded-md bg-black text-white py-2 px-4 text-sm">
            Delete
          </button>
        </div>
      </li>
      <div className="h-[1px] w-full bg-gray-300 my-4" />
    </>
  )
}

function TodoList() {
  const list: string[] = []
  return (
    <div className="flex w-full flex-wrap">
      <form action="#" className="w-full flex flex-wrap gap-2 items-center">
        <label htmlFor="task" id="task" className="">
          Enter your task:
        </label>
        <input
          type="text"
          name="task"
          id="task"
          className="border rounded-md w-dvw h-[40px] border-gray-300"
        />
        <button className="border rounded-md bg-black text-white py-2 px-4 text-sm">
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
