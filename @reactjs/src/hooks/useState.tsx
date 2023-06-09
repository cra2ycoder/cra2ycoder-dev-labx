import { useEffect, useState } from 'react'

/**
 * BASIC
 * @param props
 */
export function ReadAndWriteState(props) {
  /**
   * @description
   * state variable declaration
   */
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [degree, setDegree] = useState<string>('')

  const setData = () => {
    /**
     * WRITING THE STATE
     */
    setName('John')
    setAge(27)
    setDegree('MBA')
  }

  return (
    <div>
      {/** READING THE STATE */}
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>degree: {degree}</div>

      <button style={{ marginTop: '1rem' }} onClick={setData}>
        Set Data
      </button>
    </div>
  )
}

/**
 * GROUPING PROPS into ONE STATE
 * @param props
 */

interface IProfileProps {
  name: string | undefined
  age: number | undefined
  degree: string | undefined
}

export function GroupState(props) {
  const [profile, setProfile] = useState<IProfileProps>({})

  const setData = () => {
    /**
     * WRITING THE STATE
     */
    setProfile({
      name: 'Michale',
      age: 40,
      degree: 'B.Tech',
    })
  }

  return (
    <div>
      {/** READING THE STATE */}
      <div>name: {profile?.name}</div>
      <div>age: {profile?.age}</div>
      <div>degree: {profile?.degree}</div>

      <button style={{ marginTop: '1rem' }} onClick={setData}>
        Set Data
      </button>
    </div>
  )
}

/**
 * setting default values to state
 * @param props
 */

interface IDefaultStateProps {
  defaultHours?: number
}

export function DefaultState(props: IDefaultStateProps) {
  const { defaultHours = 0 } = props

  const getLabel = (val: number) => (val >= 12 ? 'PM' : 'AM')

  // directly assigning the props value to state
  const [hours, setHours] = useState(defaultHours)

  // receiving the default value from function and assigning it
  const [label, setLabel] = useState(getLabel(defaultHours))

  // adding a function
  const [count, setCount] = useState(() => {
    return 10
  })

  return <div>{`${hours} ${label} ${count}`}</div>
}
