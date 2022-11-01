import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        selectPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export default paginationSlice.reducer;
export const { selectPage } = paginationSlice.actions;
