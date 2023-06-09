import { useEffect, useState } from 'react'

interface IAPIHookPros {
  url: string
}

export interface IAPIHookResponseProps {
  isLoading: boolean
  fetchedResponse: any
}

/**
 * @description
 * custom hook creation
 * @param props
 */
export function useAPIHook(props: IAPIHookPros): IAPIHookResponseProps {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fetchedResponse, setFetchedResponse] = useState<any>({})

  useEffect(() => {
    // loading flag enabled
    setIsLoading(true)

    fetch(props.url)
      .then(res => res.json())
      .then(result => {
        // adding response
        setFetchedResponse(result)

        // loading flag disabled
        setIsLoading(false)
      })
  }, [])

  return {
    isLoading,
    fetchedResponse,
  }
}

export function CustomHook() {
  const todoAPI: IAPIHookResponseProps = useAPIHook({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  })

  const userAPI: IAPIHookResponseProps = useAPIHook({
    url: 'https://jsonplaceholder.typicode.com/users/1',
  })

  return (
    <>
      {(todoAPI.isLoading === true || userAPI.isLoading === true) && (
        <div>Loading...</div>
      )}
      <hr />
      {todoAPI.isLoading === false && (
        <div>{JSON.stringify(todoAPI.fetchedResponse)}</div>
      )}
      <hr />
      {userAPI.isLoading === false && (
        <div>{JSON.stringify(userAPI.fetchedResponse)}</div>
      )}
    </>
  )
}
