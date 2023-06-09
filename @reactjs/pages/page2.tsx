import React from 'react'
import {
  Component,
  TypescriptCar,
  Counter,
  ImageLoader,
  LogicalShape,
  ConditionalShape,
  ElementVariables,
  FlowerGallery,
  TodoList,
  RefExample,
} from '../code/components/function'

export default function Page2() {
  return (
    <div className="Page 1">
      <h3>Components</h3>
      <Component />
      <hr />
      <h3>Class Components: PropTypes/Typings</h3>
      <TypescriptCar
        name="bmw"
        number="TN 00 1829"
        model="x1"
        isFourWheelDriving={true}
      />
      <hr />
      <h3>Class Components: State</h3>
      <Counter initialCount={0} />
      <hr />
      <h3>Class Components: Lifecycle</h3>
      <ImageLoader url="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" />
      <hr />
      <h3>Conditional Rendering</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div
          style={{
            display: 'flex',
            margin: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Logical Operator ( && )</p>
          <LogicalShape shapeType="square" />
          <LogicalShape shapeType="circle" />
        </div>
        <div
          style={{
            display: 'flex',
            margin: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Conditinal Operation ( ? : )</p>
          <ConditionalShape shapeType="square" />
          <ConditionalShape shapeType="circle" />
        </div>
        <div
          style={{
            display: 'flex',
            margin: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Using Variables for Elements/Components</p>
          <ElementVariables shapeType="square" />
          <ElementVariables shapeType="circle" />
        </div>
      </div>
      <hr />
      <h3>Context & Provider</h3>
      <FlowerGallery />
      <hr />
      <h3>Lists & Keys</h3>
      <TodoList />
      <hr />
      <h3>Refs</h3>
      <RefExample />
      <hr />
    </div>
  )
}
