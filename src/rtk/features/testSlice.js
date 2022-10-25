import { createSlice } from '@reduxjs/toolkit';
import fetchTodos from './thunk/fetchTodos';

const initialState = {
    person: {
        name: 'Babul Akter',
        age: 29,
    },
    loading: false,
    todos: [],
    error: '',
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.person.age += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.todos = [];
            state.error = action.error.message;
        });
    },
});

export const { increase } = testSlice.actions;

export default testSlice.reducer;
