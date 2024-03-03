import React from 'react'

export class TodoItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { id, title, completed } = this.props.data || {}
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
}

export class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.todoAPI = 'https://jsonplaceholder.typicode.com/todos?userId=1'

    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    fetch(this.todoAPI)
      .then(res => res.json())
      .then(result => {
        this.setState({ list: result })
      })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.state.list.map((item: any, index: number) => (
          <TodoItem data={item} key={`todo-item-${index}`} />
        ))}
      </div>
    )
  }
}
