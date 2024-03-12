import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Go to gym at 7  pm",
      completed: false
    }
  ]);

  return (
    <div>
     <CreateTodo></CreateTodo>
     <Todos todos={todos}></Todos>
    </div>
  )
   
}

export default App
