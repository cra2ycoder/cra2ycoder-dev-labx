import { createRef, useMemo, useState } from 'react'

export function useAPIWithMemo(props: any) {
  const [url, setURL] = useState(props.url)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fetchedResponse, setFetchedResponse] = useState<any>(null)

  useMemo(async () => {
    setIsLoading(true)
    await fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log({ result })
        setFetchedResponse(result)
        setIsLoading(false)
      })
  }, [url])

  return {
    isLoading,
    fetchedResponse,
    setIsLoading,
    setFetchedResponse,
    setURL,
  }
}

export function UseMemoExample() {
  const { isLoading, fetchedResponse, setURL } = useAPIWithMemo({
    url: 'https://jsonplaceholder.typicode.com/users/1',
  })

  const [toggle, setToggle] = useState(false)

  const changeURL = () => {
    setURL('https://jsonplaceholder.typicode.com/users/2')
  }

  return (
    <div>
      {isLoading === true && <div>loading...</div>}
      {isLoading === false && <div>{JSON.stringify(fetchedResponse)}</div>}
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <button onClick={changeURL}>change url</button>
    </div>
  )
}

/**
 * @note
 * optimized searching technique
 */
export function SuggestionList({ list }: any) {
  return (
    <ul>
      {list.map((x, index: number) => (
        <li key={`item-${index}`}>{x}</li>
      ))}
    </ul>
  )
}

const nameList = [
  'Mufasa',
  'Sarabi',
  'Simba',
  'Nala',
  'Kiara',
  'Kovu',
  'Timon',
  'Pumbaa',
  'Rafiki',
  'Shenzi',
]

export function SearchBox() {
  const [userInput, setUserInput] = useState('')
  const inputRef = createRef()

  const filteredList = useMemo(() => {
    console.log('calling....')
    return nameList.filter(x => x.includes(userInput))
  }, [userInput])

  const doSearch = () => {
    setUserInput(inputRef.current.value)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={doSearch}
        placeholder="type here to search..."
      />
      <SuggestionList list={filteredList} />
    </div>
  )
}
