import React from 'react'
// import PropTypes from "prop-types";

interface ICounterProps {
  initialCount: number
}

export class Counter extends React.PureComponent<ICounterProps> {
  constructor(props: ICounterProps) {
    super(props)

    // state declaration
    this.state = {
      count: this.props.initialCount || 0,
    }

    // binding the events for accessing `this`
    // if we wanted to skip this, we can go with arrow functions
    this.doIncrease = this.doIncrease.bind(this)
    this.doDecrease = this.doDecrease.bind(this)
  }

  doIncrease() {
    this.setState({ count: this.state.count + 1 })
  }

  doDecrease() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={this.doDecrease}>-</button>
        <div style={{ padding: '1rem' }}>{this.state.count}</div>
        <button onClick={this.doIncrease}>+</button>
      </div>
    )
  }
}

// Counter.propTypes = {
//   initialCount: PropTypes.number
// };
