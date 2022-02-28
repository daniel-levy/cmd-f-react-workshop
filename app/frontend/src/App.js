import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Todo from './components/Todo'
import TodoForm from "./components/TodoForm";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTodo, updateTodo, deleteTodo, getTodos } from "./services/todoService";

const PaddedContent = styled.div`
  padding-top: 100px;
  max-width: 600px;
  margin: 0 auto;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = async (text) => {
    await createTodo(text);
    await getData();
  };
  
  const toggleTodo = async (index, text, isCompleted) => {
    await updateTodo(index, text, !isCompleted);
    await getData();
  };
  
  const removeTodo = async (index) => {
    await deleteTodo(index);
    await getData();
  };
  
  const getData = async () => {
    const result = await getTodos();
    setTodos(result)
  }

  useEffect(() => {
    getData(); 
  }, [])

  return (
    <div>
      <Header />
      <PaddedContent>
        <Card sx={{ width: 700 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ color: "#4B286D", paddingBottom: '12px' }}>
              Add To-do
            </Typography>
            <>
              {todos.map((todo) => {
                return(<Todo key={todo._id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}></Todo>)
              })}
            </>
            <TodoForm addTodo={addTodo}/>
          </CardContent>
        </Card>
      </PaddedContent>
    </div>
  );
}

export default App;
