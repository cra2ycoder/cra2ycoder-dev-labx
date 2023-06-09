import React from 'react'

/**
 * @description
 * - receives COMPONENT returns NEW COMPONENT
 * - used to enhance the component which can share common logics/functionality between the components
 * - HOC's wont work for function components - as the lifecycle wont support for it
 * - HOC is just a plain function so side effects
 * - HOCs cant be added inside the render()
 * - ref cant be passed through via HOC, so we have to use forwardRef api
 */

export function withHOC(UserComponent, userPropsIfAny) {
  /**
   * @description
   * creating a new component
   */
  return class extends React.Component {
    // accessing props
    constructor(props) {
      super(props)

      this.state = {}
    }

    render() {
      /**
       * @description
       * returning a component with updated state
       */
      return <UserComponent state={this.state} {...userPropsIfAny} />
    }
  }
}
