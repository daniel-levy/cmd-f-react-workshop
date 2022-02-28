const express = require('express');
const router = express.Router();
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController')

router.get('/', async (req, res) => {
  const todos = await getTodos()
  res.send(todos);
});

router.post('/', async (req, res) => {
  const text = req.body.text;
  const result = await addTodo(text)
  res.send(result);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const todoText = req.body.text;
  const isCompleted = req.body.isCompleted;
  const result = await updateTodo(id, todoText, isCompleted)
  res.send(result);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await deleteTodo(id)
  res.send(result);
});

module.exports = router;
