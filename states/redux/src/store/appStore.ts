import { configureStore } from '@reduxjs/toolkit'
import todoReducers from './todoSlice'

export const appStore = configureStore({
  reducer: {
    todo: todoReducers,
  },
})

export type AppRootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
