import { TextField, Button, Box } from '@mui/material';

interface TodoInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export const TodoInput = ({ value, onChange, onSubmit }: TodoInputProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
        placeholder="新しいタスクを入力"
        size="small"
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        disabled={!value.trim()}
      >
        追加
      </Button>
    </Box>
  );
};
