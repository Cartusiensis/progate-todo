import { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ])

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return ''
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }

    const updateTodos = todos.concat(newTodo)
    setTodos(updateTodos)
  }

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }

      return todo
    })

    setTodos(updateTodos)
  }

  const deleteTodo = (todoId) => {
    const deleteTodos = todos.filter((todo) => {
      return todo.id !== todoId
    })
    setTodos(deleteTodos)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />

      <Todos 
        todos={todos} 
        toggleCompleted={toggleCompleted} 
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}


export default App
