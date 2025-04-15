import { create } from 'zustand'

export const todoState = create(set => {
  return {
    list: [],
    createTask: (input: string) => {
      return set(state => {
        state.list.push({
          id: state.list.length,
          task: input,
        })

        return {
          list: [...state.list],
        }
      })
    },
    updateTask: item => {
      return set(state => {
        const findItem = state.list.find(x => x.id === item.id)
        if (findItem) {
          findItem.task = item.task
        }

        return {
          list: [...state.list],
        }
      })
    },
    deleteTask: (deleteId: number) => {
      return set(state => {
        return {
          list: state.list.filter(x => x.id !== deleteId),
        }
      })
    },
  }
})
