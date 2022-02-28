const { addValueToDb, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")

const getTodos = async () => {
  const values = await getAllValuesFromDb()
  return values
}

const addTodo = async (text) => {
  return await addValueToDb(text)
}

const updateTodo = async (id, todoText, isCompleted) => {
  return await updateValueInDb(id, todoText, isCompleted)
}

const deleteTodo = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getTodos, addTodo, updateTodo, deleteTodo }