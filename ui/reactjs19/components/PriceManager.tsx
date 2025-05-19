'use client'

import { ChangeEvent, useTransition, useState } from 'react'
import { useFormStatus } from 'react-dom'

async function updateQuantity(count: number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(count)
    }, 1000)
  })
}

function PriceManager() {
  const formStatus = useFormStatus()
  const [quantity, setQuantity] = useState<number>(1)
  const [isPending, startTransition] = useTransition()

  const onQuantityChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // startTransition(async () => {
    //   console.log(`quantity >>>>`, event.target.value)

    startTransition(async () => {
      const curQuantity = Number(event.target.value)
      const validQuantity = await updateQuantity(curQuantity)
      setQuantity(validQuantity as number)
    })
    // })
  }

  const price = quantity * 100

  return (
    <>
      <form action="">
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue={1}
          min={1}
          onChange={onQuantityChange}
        />
      </form>
      <p>Total: {isPending ? 'pending...' : `$${price}.00`}</p>
    </>
  )
}

export default PriceManager
