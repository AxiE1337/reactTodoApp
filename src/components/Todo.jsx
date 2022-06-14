import React from 'react'
import { useStore } from '../zustand/todosStore'
import CustomCheckBox from './CustomCheckBox'

export default function Todo({ todos }) {
  const updateTodoHandler = useStore((state) => state.updateTodo)

  if (todos.length <= 0)
    return <h1 className='text-4xl p-10'>No active todos</h1>

  return (
    <>
      {todos.map((todo) => (
        <div className='w-full h-20 flex items-center ' key={todo.id}>
          <CustomCheckBox
            value={todo.active}
            onChange={() => updateTodoHandler(todo.id)}
          />
          {!todo.active ? (
            <h1 className='text-sm ml-8 md:text-4xl'>{todo.title}</h1>
          ) : (
            <h1 className='text-sm md:text-4xl ml-8 text-zinc-400'>
              <s>{todo.title}</s>
            </h1>
          )}
        </div>
      ))}
    </>
  )
}
