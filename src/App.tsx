import { useState } from 'react'
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
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
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <TextField
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAddTodo()
              }
            }}
            placeholder="新しいタスクを入力"
            size="small"
          />
          <Button
            variant="contained"
            onClick={handleAddTodo}
            disabled={!newTodo.trim()}
          >
            追加
          </Button>
        </Box>
        <List>
          {todos.map(todo => (
            <ListItem
              key={todo.id}
              onClick={() => handleToggleTodo(todo.id)}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                bgcolor: 'background.paper',
                mb: 1,
                borderRadius: 1,
                cursor: 'pointer'
              }}
            >
              <ListItemText primary={todo.text} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteTodo(todo.id)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default App
