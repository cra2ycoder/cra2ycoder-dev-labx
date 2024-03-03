import React from 'react'

interface IShapeProps {
  shapeType: string
}

class Square extends React.PureComponent {
  render() {
    return <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
  }
}

class Circle extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          borderRadius: '50%',
        }}
      />
    )
  }
}

/**
 * @description
 * TYPE 1
 * Logical && Operator
 * inline rendering
 */
export class LogicalShape extends React.PureComponent<IShapeProps> {
  render() {
    return (
      <>
        {this.props.shapeType === 'square' && <Square />}
        {this.props.shapeType === 'circle' && <Circle />}
      </>
    )
  }
}

/**
 * @description
 * TYPE 2
 * Logical && Operator
 * inline rendering
 */
export class ConditionalShape extends React.PureComponent<IShapeProps> {
  render() {
    return <>{this.props.shapeType === 'square' ? <Square /> : <Circle />}</>
  }
}

/**
 * @description
 * TYPE 3
 * Using element variables
 *
 */
export class ElementVariables extends React.PureComponent<IShapeProps> {
  render() {
    let ShapeComponent = null
    if (this.props.shapeType === 'square') {
      ShapeComponent = <Square />
    } else if (this.props.shapeType === 'circle') {
      ShapeComponent = <Circle />
    }
    return <>{ShapeComponent}</>
  }
}
