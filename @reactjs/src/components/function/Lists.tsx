import React, { useEffect, useState } from 'react'

export function TodoItem(props) {
  const { id, title, completed } = props.data || {}

  return (
    <div
      style={{
        display: 'flex',
        width: '25%',
        flexDirection: 'column',
        border: '1px solid',
      }}
    >
      <h4>{id}</h4>
      <p>{title}</p>
      <div>status: {completed.toString()}</div>
    </div>
  )
}

export function TodoList(props) {
  const todoAPI = 'https://jsonplaceholder.typicode.com/todos?userId=1'
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(todoAPI)
      .then(res => res.json())
      .then(result => {
        setList(result)
      })
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.map((item: any, index: number) => (
        <TodoItem data={item} key={`todo-item-${index}`} />
      ))}
    </div>
  )
}
