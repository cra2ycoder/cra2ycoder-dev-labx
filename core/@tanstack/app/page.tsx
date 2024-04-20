'use client'

// import Image from 'next/image'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export default function Home() {
  const queryClient = useQueryClient()

  const [taskName, setTaskName] = useState('')

  const { isPending, error, data } = useQuery({
    queryKey: ['get-todo-list'],
    queryFn: async () => {
      return await fetch('http://localhost:3000/api/todo').then(res =>
        res.json()
      )
    },
  })

  const addTask = useMutation({
    mutationFn: async data => {
      return await fetch('http://localhost:3000/api/todo', {
        method: 'POST',
        body: JSON.stringify(data),
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-todo-list'] })
    },
  })

  // console.log({ isPending, error, data })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <button
        onClick={() => {
          addTask.mutate({
            id: new Date().getTime(),
            task: taskName,
          })
          setTaskName('')
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
