import { configureStore } from '@reduxjs/toolkit';
import transactionSlice from '../features/transaction/transactionSlice';

import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        transactions: transactionSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
