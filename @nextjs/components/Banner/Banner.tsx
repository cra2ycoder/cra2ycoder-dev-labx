import React from 'react'
import styles from './styles.module.css'

function Banner() {
  return (
    <div className={styles.bannerMain}>
      <h1>Coffee Connoisseur</h1>
      <p>Discover your local coffee shop!</p>
      <button>View stores nearby</button>
    </div>
  )
}

export default Banner
