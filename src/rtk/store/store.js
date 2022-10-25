import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import testReducer from '../features/testSlice';

const store = configureStore({
    reducer: {
        test: testReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
