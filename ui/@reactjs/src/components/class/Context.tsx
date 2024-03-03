import React, { createContext } from 'react'

/**
 * @description
 * context
 */
export const FlowerContext = createContext({})

/**
 * @description
 * child component
 */
export class FlowerImage extends React.Component {
  render() {
    // console.log(this.context);
    return (
      <img
        src={this.context.flowerSrc || this.context.flowerPlaceHolder}
        alt="flower"
      />
    )
  }
}

FlowerImage.contextType = FlowerContext

/**
 * @description
 * child component
 */
export class FlowerName extends React.Component {
  render() {
    return (
      <div>
        {this.context?.response ? this.context?.response[0]?.title : 'unknown'}
      </div>
    )
  }
}

FlowerName.contextType = FlowerContext

/**
 * @description
 * Parent component
 */
export class FlowerGallery extends React.Component {
  constructor(props) {
    super(props)

    this.apiURL = 'https://jsonplaceholder.typicode.com/albums?id=5'
    this.state = {
      response: [],
    }
  }

  componentDidMount() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(json => {
        this.setState({
          response: json,
        })
      })
  }

  render() {
    const contextValue = {
      ...this.state,
      flowerPlaceHolder: 'https://via.placeholder.com/150',
    }

    return (
      <FlowerContext.Provider value={contextValue}>
        <div>
          <FlowerName />
          <FlowerImage />
        </div>
      </FlowerContext.Provider>
    )
  }
}
