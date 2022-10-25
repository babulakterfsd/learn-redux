import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Babul Akter',
    age: 29,
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.age += action.payload;
        },
    },
});

export const { increase } = testSlice.actions;

export default testSlice.reducer;
