import { useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import { TodoInput } from '../parts/TodoInput'
import { TodoList } from '../containers/TodoList'
import { Todo } from '../types/todo'

export const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ])
      setNewTodo('')
    }
  }

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ToDo App
        </Typography>
        <TodoInput
          value={newTodo}
          onChange={setNewTodo}
          onSubmit={handleAddTodo}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </Box>
    </Container>
  )
}
