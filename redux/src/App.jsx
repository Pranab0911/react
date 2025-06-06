import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>redux toolkit</h1>
      <AddTodo></AddTodo>
    </>
  )
}

export default App
