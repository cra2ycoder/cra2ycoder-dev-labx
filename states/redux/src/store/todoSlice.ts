import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// typings
export type TTodoItem = {
  id: number
  task: string
}
export type TTodoList = {
  list: TTodoItem[]
}

// initial state
const initialValues: TTodoList = {
  list: [],
}

// create state slice instance
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValues,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: state.list.length,
        task: action.payload,
      })
    },
    updateTask: (state, action: PayloadAction<TTodoItem>) => {
      const updateItem = state.list.find(x => x.id === action.payload.id)

      if (updateItem) {
        updateItem.task = action.payload.task
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
  },
})

// exporting for ease use
export const { createTask, deleteTask, updateTask } = todoSlice.actions

// using this one to append into store
export default todoSlice.reducer
