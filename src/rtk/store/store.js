import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filter/filterSlice';
import transactionSlice from '../features/transaction/transactionSlice';

import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        transaction: transactionSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
