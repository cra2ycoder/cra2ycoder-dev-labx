import { memo, useState } from 'react'

function Title({ title }) {
  console.log('Title component rendered --->')
  return <div>{title}</div>
}

function Picture({ url }) {
  console.log('Picture component rendered --->')
  return <img src={url} width="200px" alt="awesome pic" />
}

interface IAnimalProps {
  name?: string
  breed?: string
  info?: {
    country?: string
    forestName?: string
    livingDays?: number
    strength?: {
      runningSpeed?: number
      sleepingHours?: number
    }
  }
}

function Animal(props: IAnimalProps) {
  console.log('Animal component rendered ---> ')
  return <code>{JSON.stringify(props)}</code>
}

/**
 * @description
 * components memoized for optimizing
 * - this will control the re-rendering
 * - only compares props (prevProps vs nextProps)
 * - only does shallow comparsion
 * - if the child component has useState, useReduer, useContext then component will re-render
 *
 */
const MemoizedTitle = memo(Title)
const MemoizedPicture = memo(Picture)
const MemoizedAnimal = memo(Animal)

export function MemoExample() {
  const [data, setData] = useState<object>({
    title: 'title',
    url: '//iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  })

  const [animalData, setAnimalData] = useState({} as IAnimalProps)

  const changeTitle = () => {
    setData({
      ...data,
      title: 'new title',
    })
  }

  const changePicture = () => {
    setData({
      ...data,
      url: 'https://via.placeholder.com/150',
    })
  }

  const setAnimalInfo = () => {
    setAnimalData({
      // name: "dog",
      // breed: "foriegn",
      info: {
        // country: "india",
        strength: {
          runningSpeed: 30,
        },
      },
    })
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MemoizedTitle title={data.title} />
        <MemoizedPicture url={data.url} />
        <MemoizedAnimal {...animalData} />
      </div>
      <div>
        <button onClick={changeTitle}>Change Title</button>
        <button onClick={changePicture}>Change Picture</button>
        <button onClick={setAnimalInfo}>Set Animal Data</button>
      </div>
      <small style={{ color: 'red' }}>
        check console logs after clicking the buttons
      </small>
    </>
  )
}
