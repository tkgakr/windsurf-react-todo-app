import { List } from '@mui/material'
import { TodoItem } from '../parts/TodoItem'
import { Todo } from '../types/todo'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  )
}
