import { useRef, useState, useEffect } from 'react'
import Todo from '../components/Todo'
import { useStore } from '../zustand/todosStore'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const inputValue = useRef()
  const todosStore = useStore()

  useEffect(() => {
    setTodos(todosStore.todos)
  }, [todosStore.todos])

  const addTodoHandler = () => {
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
    <div>
      <Todo todos={todos} />
      <input type='text' ref={inputValue} />
      <button onClick={addTodoHandler}>Add todo</button>
      <div>
        <p>{todos.length + ' items left'}</p>
        <p onClick={() => sortTodos('all')}>All</p>
        <p onClick={() => sortTodos('active')}>Active</p>
        <p onClick={() => sortTodos('completed')}>Completed</p>
        <p onClick={() => todosStore.deleteCompleted()}>Clear completed</p>
      </div>
    </div>
  )
}
