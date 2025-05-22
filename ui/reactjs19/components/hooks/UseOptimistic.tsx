'use client'

import { useOptimistic, useState, startTransition } from 'react'

function UseOptimistic() {
  const [count, setCount] = useState<number>(0)
  //   const [isPending, startTransition] = useTransition()

  const [quantity, updateQuantity] = useOptimistic(
    count,
    (curValue: number, newValue: number) => newValue
  )

  const serverCall = async () => {
    return await new Promise((res, rej) => {
      //   console.log(`count >>>> `, count)
      setTimeout(() => {
        res(0)
      }, 2000)
    }).then(x => x)
  }

  const handleQuantityChange = async () => {
    startTransition(async () => {
      setCount(count => count + 1)
      updateQuantity(count)
    })

    const result = await serverCall()
    // console.log({ result })
    setCount(result)
  }

  return (
    <div>
      <p>Quantity:{quantity}</p>
      <button onClick={handleQuantityChange}>Add</button>
    </div>
  )
}

export default UseOptimistic
