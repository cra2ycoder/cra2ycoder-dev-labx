// import Image from 'next/image'
import Banner from '@/components/Banner/Banner'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  )
}
