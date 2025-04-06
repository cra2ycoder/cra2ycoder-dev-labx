import { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask, deleteTask, TTodoItem } from '../store/todoSlice'

function TodoItem(props: Readonly<TTodoItem>) {
  const dispatch = useDispatch()
  const labelRef = useRef<HTMLParagraphElement>(null)
  const userInputAsDraft = useRef<string>(undefined)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleUserChange = () => {
    userInputAsDraft.current = labelRef.current?.innerText
  }

  const handleKeyboardEvent = (
    e: React.KeyboardEvent<HTMLParagraphElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const handleEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (editMode === true) {
      setEditMode(false)
      dispatch(
        updateTask({
          id: props.id,
          task: userInputAsDraft.current ?? '',
        })
      )
    } else {
      setEditMode(true)
    }
  }

  const handleDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteTask(props.id))
  }

  useEffect(() => {
    if (editMode) {
      labelRef.current?.focus()
    }
  }, [editMode])

  return (
    <>
      <li className="flex items-center justify-between w-full">
        <p
          ref={labelRef}
          contentEditable={editMode}
          onInput={handleUserChange}
          onKeyDown={handleKeyboardEvent}
        >
          {props.task}
        </p>
        <div className="flex gap-2">
          <button
            className="border rounded-md bg-black text-white py-2 px-4 text-sm"
            onClick={handleEditTask}
          >
            {editMode ? 'Save' : 'Edit'}
          </button>
          <button
            className="border rounded-md bg-black text-white py-2 px-4 text-sm"
            onClick={handleDeleteTask}
          >
            Delete
          </button>
        </div>
      </li>
      <div className="h-[1px] w-full bg-gray-300 my-4" />
    </>
  )
}

export default TodoItem
