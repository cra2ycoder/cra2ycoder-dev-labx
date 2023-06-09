import React from 'react'

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

export function TypescriptCar(props: ICarProps) {
  return <code>{JSON.stringify(this.props)}</code>
}
