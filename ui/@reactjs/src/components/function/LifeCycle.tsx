import React, { useEffect, useState } from 'react'

interface IImageLoaderProps {
  url: string
}

export function ImageLoader(props: IImageLoaderProps) {
  const [status, setStatus] = useState([])

  const updateState = (currentStatus: string) => {
    status.push(currentStatus)
    setStatus([...status])
  }

  const onImageLoadStart = () => {
    updateState('Image loading started!')
  }

  const onImageLoaded = () => {
    updateState('Image loaded successfully!')
  }

  const onLoadingError = () => {
    updateState('Image loaded successfully!')
  }

  /**
   * @description
   * - will be called when the state has updated
   */
  useEffect(() => {}, [status])

  /**
   * @description
   * - will be called only one time
   * - when the components gets loaded/mounted in the page
   */
  useEffect(() => {
    // updateState("Component Mounted!");
  }, [])

  /**
   * @description
   * - will be called when component going to removed from the page
   */
  useEffect(() => {
    return () => {
      // this function will be called when unmounting
    }
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <img
        width="100px"
        src={props.url}
        alt="dynamic"
        onLoadStart={onImageLoadStart}
        onLoad={onImageLoaded}
        onError={onLoadingError}
      />
      <p>{status.join('\n')}</p>
    </div>
  )
}
