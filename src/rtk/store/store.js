import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/testSlice';
import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        test: testReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
