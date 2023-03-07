import axios from 'axios';

const backendUrl = 'http://localhost:8080';

interface Results {
  data?: any;
}

const getTodos = async () => {
  let results: Results = {};
  try {
    results = await axios.get(`${backendUrl}/todos`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const deleteTodo = async (id: any) => {
  let results: Results = {};
  try {
    results = await axios.delete(`${backendUrl}/todos/${id}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const updateTodo = async (id: any, text: string, isCompleted: boolean) => {
  let results: Results = {};
  try {
    results = await axios.put(`${backendUrl}/todos/${id}`, { text: text, isCompleted: isCompleted });
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const createTodo = async (text: string) => {
  let results: Results = {};
  try {
    results = await axios.post(`${backendUrl}/todos`, { text: text });
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export { getTodos, deleteTodo, updateTodo, createTodo };
