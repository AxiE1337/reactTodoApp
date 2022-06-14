import create from 'zustand'
import { persist } from 'zustand/middleware'

let store = (set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  deleteCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.active === false),
    })),
  updateTodo: (id) =>
    set((state) => {
      const index = state.todos.findIndex((todo) => todo.id === id)
      const active = state.todos[index].active
      state.todos[index].active = !active
    }),
})

store = persist(store)
export const useStore = create(store)
