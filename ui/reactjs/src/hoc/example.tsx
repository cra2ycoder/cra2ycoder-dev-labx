import React from 'react'

interface UnknownProps {
  [key: string]: any
}

export function withHOCList(UserComponent, userPropsIfAny: UnknownProps) {
  return class extends React.Component {
    // accessing props
    constructor(props) {
      super(props)

      this.state = {
        list: [],
      }
    }

    removeItemByIndex = (itemIndex: number) => {
      // removing the item
      this.state.list.splice(itemIndex, 1)

      // updating the state
      this.setState({
        list: [...this.state.list],
      })
    }

    loadAll = () => {
      fetch(userPropsIfAny.url)
        .then(response => response.json())
        .then(result => {
          this.setState({
            list: result,
          })
        })
    }

    render() {
      return (
        <>
          <button onClick={this.loadAll}>load all</button>
          <button onClick={() => this.removeItemByIndex(0)}>remove at 0</button>
          <UserComponent
            {...userPropsIfAny}
            state={this.state}
            removeItemByIndex={this.removeItemByIndex}
          />
        </>
      )
    }
  }
}

/**
 * @description
 * - a component list component with item
 *
 */
function Item(props: UnknownProps) {
  return (
    <li
      style={{
        margin: '1rem',
        borderBottom: '1px solid #ccc',
        position: 'relative',
        display: 'flex',
        height: '2.5rem',
      }}
    >
      <div>
        {props.id}: {props.title}
      </div>
      <button
        style={{ position: 'absolute', top: 0, right: 0 }}
        onClick={() => props.removeItemByIndex(props.location)}
      >
        x
      </button>
    </li>
  )
}

function List(props: UnknownProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {props.state.list.map((x: UnknownProps, index: number) => (
        <Item
          {...x}
          location={index}
          key={`item-${index}`}
          removeItemByIndex={props.removeItemByIndex}
        />
      ))}
    </ul>
  )
}

/**
 * @description
 * Enhancing the LIST component with HOC
 * - TodoList
 * - PostList
 */
export const TodoList = withHOCList(List, {
  url: 'https://jsonplaceholder.typicode.com/todos?userId=1',
})

export const PostList = withHOCList(List, {
  url: 'https://jsonplaceholder.typicode.com/posts?userId=1',
})
