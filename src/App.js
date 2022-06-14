import Todos from './pages/Todos'

function App() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-red-300 text-8xl font-thin mb-6'>todos</h1>
      <Todos />
    </div>
  )
}

export default App
