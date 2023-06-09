import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * @description
 * context
 */
export const FlowerContext = createContext({})

/**
 * @description
 * child component
 */
export function FlowerImage() {
  const { flowerSrc, flowerPlaceHolder } = useContext(FlowerContext)

  return <img src={flowerSrc || flowerPlaceHolder} alt="flower" />
}

/**
 * @description
 * child component
 */
export function FlowerName() {
  const { response = [] } = useContext(FlowerContext)

  return <div>{response ? response[0]?.title : 'unknown'}</div>
}

/**
 * @description
 * Parent component
 */
export function FlowerGallery() {
  const apiURL = 'https://jsonplaceholder.typicode.com/albums?id=5'
  const [response, setResponse] = useState([])

  const contextValue = {
    response,
    flowerPlaceHolder: 'https://via.placeholder.com/150',
  }

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(json => {
        setResponse(json)
      })
  }, [])

  return (
    <FlowerContext.Provider value={contextValue}>
      <div>
        <FlowerName />
        <FlowerImage />
      </div>
    </FlowerContext.Provider>
  )
}
