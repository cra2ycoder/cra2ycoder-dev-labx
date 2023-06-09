import React from 'react'

interface IImageLoaderProps {
  url: string
}

export class ImageLoader extends React.Component<IImageLoaderProps> {
  constructor(props: IImageLoaderProps) {
    super(props)
    this.state = {
      status: [],
    }
  }

  updateState(currentStatus: string) {
    // method one
    // this.setState({
    //   status: [...this.state.status, currentStatus]
    // });

    // method two
    this.setState((state, props) => {
      return state.status.push(currentStatus)
    })
  }

  onImageLoadStart() {
    this.updateState('Image loading started!')
  }

  onImageLoaded() {
    this.updateState('Image loaded successfully!')
  }

  onLoadingError() {
    this.updateState('Image loaded successfully!')
  }

  /**
   * @description
   * - before render() will be called
   * - compares the state & props and returns updated object
   * - returns `null` if nothing required to be updated
   *
   * @param props
   * @param state
   */
  static getDerivedStateFromProps(props: any, state: any) {
    console.log({ props, state })
    return null
  }

  /**
   * @description
   * - will be called after render()
   * - before the DOM going to be changed
   *
   * @param prevProps
   * @param prevState
   */
  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log({ prevProps, prevState })
    return null
  }

  /**
   * @description
   * - will be called before calling the render() and after the getDerivedStateFromProps()
   * - if returns `true`  render() will be called else will be stopped
   *
   * @param nextProps
   * @param nextState
   */
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log({ nextProps, nextState })
    return true
  }

  /**
   * @description
   * - will be called when the state has updated
   * - beware: when adding state changes here it will endup with infinite loop - should have proper condition
   */
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log({ prevProps, prevState, snapshot })
  }

  /**
   * @description
   * - will be called only one time
   * - when the components gets loaded/mounted in the page
   */
  componentDidMount() {
    this.updateState('Component Mounted!')
  }

  /**
   * @description
   * - will be called when component going to removed from the page
   */
  componentWillUnmount() {}

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <img
          width="100px"
          src={this.props.url}
          alt="dynamic"
          onLoadStart={() => this.onImageLoadStart()}
          onLoad={() => this.onImageLoaded()}
          onError={() => this.onLoadingError()}
        />
        <p>{this.state.status.join('\n')}</p>
      </div>
    )
  }
}
