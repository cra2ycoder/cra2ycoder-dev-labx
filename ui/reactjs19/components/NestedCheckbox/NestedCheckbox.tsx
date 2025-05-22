'use client'

import { useState, useContext, createContext } from 'react'
import { data } from './fixtures'

type CheckboxItemProps = {
  data: {
    id: number
    name: string
    checked: boolean
    parentId?: string[]
  }
}

const NestedCheckboxContext = createContext({} as any)

function CheckboxItem(props: CheckboxItemProps) {
  const { data = {} } = props
  const { updateData } = useContext(NestedCheckboxContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    updateData(checked, data)
  }

  return (
    <>
      <input
        type="checkbox"
        id={data.id}
        checked={data.checked}
        onChange={handleChange}
      />
      <label htmlFor={data.id}>{data.name}</label>
    </>
  )
}

function CheckboxList(props) {
  const { children = [] } = props

  return (
    <div>
      <CheckboxItem data={props} />
      {children.length > 0 && (
        <div style={{ paddingLeft: '20px' }}>
          {children.map((item: CheckboxItemProps) => {
            return <CheckboxList key={`child-cb-item-${item.id}`} {...item} />
          })}
        </div>
      )}
    </div>
  )
}

function NestedCheckbox() {
  const [checkboxStateData, setCheckboxStateData] = useState(data)

  const updateData = (state: boolean, currentItem: any) => {
    const recursiveUpdate = list => {
      list.forEach(item => {
        // state change if name are equal
        if (item.name === currentItem.name) {
          item.checked = state
        }

        if (currentItem.parentId.includes(item.name)) {
          item.checked = true
        }

        if (item.children) {
          recursiveUpdate(item.children)
        }
      })
    }
    recursiveUpdate(checkboxStateData)

    console.log(currentItem)

    setCheckboxStateData([...checkboxStateData])
  }

  return (
    <NestedCheckboxContext.Provider value={{ updateData }}>
      <>
        {checkboxStateData.map(item => (
          <CheckboxList key={`pr-cb-item-${item.id}`} {...item} />
        ))}
      </>
    </NestedCheckboxContext.Provider>
  )
}

export default NestedCheckbox
