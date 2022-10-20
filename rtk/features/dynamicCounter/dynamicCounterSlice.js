/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');
const { counterActions } = require('../counter/counterSlice');

const initialState = {
    count: 0,
};

const dynamicCounterSlice = createSlice({
    name: 'dynamicCounter',
    initialState,
    reducers: {
        dIncrement: (state, action) => {
            state.count += action.payload;
        },
        dDecrement: (state, action) => {
            state.count -= action.payload;
        },
    },
    // extraReducers: {
    //     'counter/increment': (state, action) => {
    //         state.count += action.payload * 3;
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(counterActions.increment, (state, action) => {
            state.count += action.payload * 3;
        });
    },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
