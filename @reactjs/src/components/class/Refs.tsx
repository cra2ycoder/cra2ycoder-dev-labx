import React from 'react'

export class RefExample extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.divRef = React.createRef()
  }

  doFocus = () => {
    this.inputRef.current.focus()

    const dataSet = this.divRef.current.dataset
    console.log({ dataSet })
  }

  render() {
    return (
      <div>
        <div
          ref={this.divRef}
          data-id="ref-0"
          data-name="ref-tech"
          data-isref={true}
        />
        <input ref={this.inputRef} />
        <button onClick={this.doFocus}>click</button>
      </div>
    )
  }
}
