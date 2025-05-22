'use client'

import {
  useRef,
  useState,
  useMemo,
  useEffect,
  useTransition,
  useCallback,
} from 'react'

function UseMemo() {
  const inputRef = useRef(null)
  const cachedData = useRef({})
  const [productResults, setProductResults] = useState([])
  const [productId, setProductId] = useState<string>('')
  const [isPending, startTransition] = useTransition()

  const optimizedResults = useMemo(() => {
    cachedData.current[productId] = productResults
    return productResults
  }, [productResults])

  useEffect(() => {
    if (productId === '') {
      return
    }

    if (cachedData.current[productId]) {
      setProductResults(cachedData.current[productId])
      return
    }

    startTransition(async () => {
      const productDetails = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: 'GET',
        }
      ).then(res => res.json())

      setProductResults(productDetails)
    })
  }, [productId])

  const loadProducts = useCallback(() => {
    setProductId(inputRef.current.value)
  }, [])

  useEffect(() => {
    // clearing all the stored data from the ref
    // to save memory
    return () => {
      cachedData.current = null
    }
  })

  return (
    <div>
      <label htmlFor="productId">
        <input type="text" name="productId" id="productId" ref={inputRef} />
      </label>
      <button onClick={loadProducts} disabled={isPending}>
        {isPending ? `Searching...` : `Search`}
      </button>
      <hr />
      <p>{JSON.stringify(optimizedResults)}</p>
    </div>
  )
}

export default UseMemo
