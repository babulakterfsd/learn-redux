import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchKeyword: '',
    tags: [],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectTag: (state, action) => {
            state.tags.push(action.payload);
        },
        removeTag: (state, action) => {
            const indexToBeRemoved = state.tags.indexOf(action.payload);
            if (indexToBeRemoved !== -1) {
                state.tags.splice(indexToBeRemoved, 1);
            }
        },
        handleSearch: (state, action) => {
            state.searchKeyword = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { selectTag, removeTag, handleSearch } = filterSlice.actions;
