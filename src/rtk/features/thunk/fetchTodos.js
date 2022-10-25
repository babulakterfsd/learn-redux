import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTodos = createAsyncThunk('test/fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todos = await response.json();
    return todos;
});

export default fetchTodos;
