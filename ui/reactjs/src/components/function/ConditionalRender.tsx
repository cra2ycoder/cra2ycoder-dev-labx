import React from 'react'

interface IShapeProps {
  shapeType: string
}

function Square() {
  return <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
}

function Circle() {
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

/**
 * @description
 * TYPE 1
 * Logical && Operator
 * inline rendering
 */
export function LogicalShape(props: IShapeProps) {
  return (
    <>
      {props.shapeType === 'square' && <Square />}
      {props.shapeType === 'circle' && <Circle />}
    </>
  )
}

/**
 * @description
 * TYPE 2
 * Logical && Operator
 * inline rendering
 */
export function ConditionalShape(props: IShapeProps) {
  return <>{props.shapeType === 'square' ? <Square /> : <Circle />}</>
}

/**
 * @description
 * TYPE 3
 * Using element variables
 *
 */
export function ElementVariables(props: IShapeProps) {
  let ShapeComponent = null
  if (props.shapeType === 'square') {
    ShapeComponent = <Square />
  } else if (props.shapeType === 'circle') {
    ShapeComponent = <Circle />
  }

  return <>{ShapeComponent}</>
}
