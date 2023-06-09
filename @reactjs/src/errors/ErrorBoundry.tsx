import React from 'react'

export class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: {},
    }
  }

  // static getDerivedStateFromError(error) {
  //   console.log({ error });
  //   return null;
  // }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
    this.setState({
      error: {
        error,
        errorInfo,
      },
    })
  }

  render() {
    return (
      <>
        {this.state.error.error && (
          <code>Error Found: {JSON.stringify(this.state)}</code>
        )}
        {!this.state.error.error && this.props.children}
      </>
    )
  }
}

export function ErrorComponent() {
  const throwError = () => {
    throw new Error('An Error from error component!')
  }

  return <button onClick={throwError}>Throw Error</button>
}
