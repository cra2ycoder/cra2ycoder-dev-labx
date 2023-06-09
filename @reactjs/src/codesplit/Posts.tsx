import { useEffect, useState } from 'react'

export default function Posts() {
  const [response, setResponse] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=1'
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setLoading(false)
        setResponse(result)
      })
  }, [])

  return (
    <div>
      {loading && <div>loading...</div>}
      {!loading && <div>{JSON.stringify({ response })}</div>}
    </div>
  )
}
