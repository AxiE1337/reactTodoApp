import { useRef, useState, useEffect } from 'react'
import Input from '../components/Input'
import Todo from '../components/Todo'
import { useStore } from '../zustand/todosStore'
import { Button } from 'antd'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const inputValue = useRef()
  const todosStore = useStore()

  useEffect(() => {
    setTodos(todosStore.todos)
  }, [todosStore.todos])

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (inputValue.current.value.length > 1) {
      todosStore.addTodo({
        id: Date.now(),
        title: inputValue.current.value,
        active: false,
      })
      inputValue.current.value = ''
    }
  }

  const sortTodos = (action) => {
    if (action === 'all') {
      return setTodos(todosStore.todos)
    }
    if (action === 'active') {
      return setTodos(todosStore.todos.filter((todo) => todo.active === false))
    }
    if (action === 'completed') {
      return setTodos(todosStore.todos.filter((todo) => todo.active === true))
    }
  }

  return (
    <div className='flex flex-col w-5/6 min-h-4/5 border-2 shadow-xl'>
      <form onSubmit={addTodoHandler} className='border-b-2 '>
        <Input placeholder={'What needs to be done?'} inputValue={inputValue} />
      </form>
      <Todo todos={todos} />
      <div className='flex h-10 w-full items-center justify-between p-1 md:p-2 border-t-2'>
        <p className='md:text-sm text-xs'>
          {todos.filter((todo) => todo.active === false).length + ' items left'}
        </p>
        <Button
          className='border-0 md:text-sm text-xs p-0 md:p-2'
          onClick={() => sortTodos('all')}
        >
          All
        </Button>
        <Button
          className='border-0 md:text-sm text-xs p-0 md:p-2'
          onClick={() => sortTodos('active')}
        >
          Active
        </Button>
        <Button
          className='border-0 md:text-sm text-xs p-0 md:p-2'
          onClick={() => sortTodos('completed')}
        >
          Completed
        </Button>
        <Button
          className='border-0 md:text-sm text-xs p-0 md:p-2'
          onClick={() => todosStore.deleteCompleted()}
        >
          Clear completed
        </Button>
      </div>
    </div>
  )
}
