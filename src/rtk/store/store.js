import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/testSlice';

const store = configureStore({
    reducer: {
        test: testReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
