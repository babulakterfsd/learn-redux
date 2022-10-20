const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const counterReducer = require('../features/counter/counterSlice');
const dynamicCounterReducer = require('../features/dynamicCounter/dynamicCounterSlice');
// const myLogger = require('../middlewares/myLogger');

const reduxLogger = createLogger();

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
});

module.exports = store;
