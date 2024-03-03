import React from 'react'

export class ClassRenderProp extends React.Component {
  render() {
    return (
      <div>
        <h5>From Class Component</h5>
        {this.props.renderHeading()}
        {this.props.renderDescription()}
      </div>
    )
  }
}

export function FunctionRenderProp(props) {
  return (
    <div>
      <h5>From Function Component</h5>
      {props.renderHeading()}
      {props.renderDescription()}
    </div>
  )
}
