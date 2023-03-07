import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const TodoForm = ({ addTodo }: { addTodo: (text: string) => void }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Add To-Do"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </form>
  );
};

export default TodoForm;
