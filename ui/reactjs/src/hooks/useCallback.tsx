import { memo, useCallback, useState } from 'react'

const defaultNameList = [
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

export const NameItem = memo(({ value, id, onRemove }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.4rem 0',
      }}
    >
      <li>{value}</li>
      <button style={{ marginLeft: '1rem' }} onClick={() => onRemove(value)}>
        x
      </button>
    </div>
  )
})

export const NameList = memo(({ list, removeName }: any) => {
  return (
    <ul style={{ width: '20%' }}>
      {list.map((x, index: number) => {
        return (
          <NameItem
            key={`item-${index}`}
            value={x}
            id={index}
            onRemove={removeName}
          />
        )
      })}
    </ul>
  )
})

export function UseCallBackExample() {
  const [nameList, setNameList] = useState(defaultNameList)

  const removeName = useCallback(
    (name: string) => {
      const filteredNameList = nameList.filter(x => x !== name)
      setNameList(filteredNameList)
    },
    [nameList]
  )

  return <NameList list={nameList} removeName={removeName} />
}
