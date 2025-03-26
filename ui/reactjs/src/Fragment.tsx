import { Fragment } from 'react'

export function NamedFragment() {
  return (
    <Fragment>
      <p>element 1</p>
      <p>element 2</p>
    </Fragment>
  )
}

export function EmptyFragment() {
  return (
    <>
      <p>element 1</p>
      <p>element 2</p>
    </>
  )
}

export function FragmentInList() {
  const numberList = [1, 2, 3]

  return (
    <>
      {numberList.map((x, index: number) => {
        return (
          <Fragment key={`fragment-${index}`}>
            <p>element 1</p>
            <p>element 2</p>
          </Fragment>
        )
      })}
    </>
  )
}
