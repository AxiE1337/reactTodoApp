import React from 'react'
import { useStore } from '../zustand/todosStore'

export default function Todo({ todos }) {
  const updateTodoHandler = useStore((state) => state.updateTodo)
  const deleteTodoHandler = useStore((state) => state.deleteTodo)

  if (todos.length <= 0) return <h1>no todos</h1>

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ backgroundColor: todo.active ? 'green' : 'white' }}
        >
          <h1 onDoubleClick={() => updateTodoHandler(todo.id)}>{todo.title}</h1>
          <button onClick={() => deleteTodoHandler(todo.id)}>del</button>
        </div>
      ))}
    </>
  )
}
