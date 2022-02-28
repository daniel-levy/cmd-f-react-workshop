import React from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <Box sx={{ display: 'flex', p: 1, borderRadius: 1, alignItems: 'center'}}>
      <FormControl component="fieldset" variant="standard" sx={{ flexGrow: 1, p: 2 }}>
        <FormGroup>
          <FormControlLabel
            key={`${todo._id}-${todo.text}`}
            control={
              <Checkbox
                checked={todo.isCompleted}
                onChange={() => {toggleTodo(todo._id, todo.text, todo.isCompleted)}}
                name={`${todo._id}-${todo.text}`}
              />
            }
            label={todo.text}
          />
        </FormGroup>
      </FormControl>
      <DeleteIcon onClick={() => {removeTodo(todo._id)}}/>
    </Box>
  )
}

export default Todo
