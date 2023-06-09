import React from 'react'
import PropTypes from 'prop-types'

/**
 * @description
 * - using javascript
 * - using propTypes package for typings
 */
export class Car extends React.Component {
  render() {
    return <code>{JSON.stringify(this.props)}</code>
  }
}

Car.propTypes = {
  name: PropTypes.oneOf(['bmw', 'audi', 'jaquar']),
  model: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isFourWheelDriving: PropTypes.bool,
}

/**
 * @description
 * using typescript
 */

type TCarName = 'bmw' | 'audi' | 'jaquar'

interface ICarProps {
  name: TCarName
  model: string
  number: number | string
  isFourWheelDriving?: boolean
}

export class TypescriptCar extends React.Component<ICarProps> {
  render() {
    return <code>{JSON.stringify(this.props)}</code>
  }
}
