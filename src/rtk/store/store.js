import { configureStore } from '@reduxjs/toolkit';
import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        //
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
