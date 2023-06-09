import React, { useState, useTransition } from 'react'

function StartTransitions() {
  const [searchValue, setSearchValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const onTyping = e => {
    console.log(e.target.value)

    setSearchValue(e.target.value)

    startTransition(() => {
      setSearchQuery(searchValue)
    })
  }

  return (
    <div>
      <p>Start something to search:</p>
      <input id="search" type="text" onChange={onTyping} />
      <hr />
      <div>
        {isPending ? 'Loading...' : `?query=${searchQuery},${searchValue}`}
      </div>
    </div>
  )
}

export default StartTransitions
