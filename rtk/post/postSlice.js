/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');
const myThunkFunc = require('./myThunkFunc');

const initialState = {
    loading: false,
    posts: [],
    error: '',
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(myThunkFunc.pending, (state, action) => {
            state.loading = true;
            state.error = '';
            state.posts = [];
        });
        builder.addCase(myThunkFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.posts = action.payload;
        });
        builder.addCase(myThunkFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.posts = [];
        });
    },
});

module.exports = postSlice.reducer;
