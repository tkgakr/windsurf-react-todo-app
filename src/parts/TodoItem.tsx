import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <ListItem
      sx={{
        bgcolor: "background.paper",
        mb: 1,
        borderRadius: 1,
      }}
      secondaryAction={
        <IconButton
          edge="end"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
          aria-label="削除"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
};
