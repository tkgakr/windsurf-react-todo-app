import {
  ListItem,
  ListItemText,
  IconButton,
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
      onClick={() => onToggle(todo.id)}
      sx={{
        textDecoration: todo.completed ? "line-through" : "none",
        bgcolor: "background.paper",
        mb: 1,
        borderRadius: 1,
        cursor: "pointer",
      }}
      secondaryAction={
        <IconButton
          edge="end"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={todo.text} />
    </ListItem>
  );
};
