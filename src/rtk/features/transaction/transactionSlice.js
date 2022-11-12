import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addTransaction, getTransactions, updateTransaction } from './transactionAPI';

const initialState = {
    loading: false,
    transactions: [],
    error: '',
    editing: {},
};

export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
    const transactions = await getTransactions();
    return transactions;
});

export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
});

export const editTransaction = createAsyncThunk(
    'transaction/updateTransaction',
    async ({ id, data }) => {
        const transaction = await updateTransaction({ id, data });
        return transaction;
    }
);

export const removeTransaction = createAsyncThunk('transaction/deleteTransaction', async (id) => {
    const transaction = await updateTransaction(id);
    return transaction;
});

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInactive: (state) => {
            state.editing = {};
        },
    },
    extraReducers: (builder) => {
        // read
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message;
            });
        // create
        builder
            .addCase(createTransaction.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message;
            });
        // update
        builder
            .addCase(editTransaction.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                state.loading = false;
                const indexToUpdate = state.transactions.findIndex(
                    (t) => t.id === action.payload.id
                );
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(editTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message;
            });
        // delete
        builder
            .addCase(removeTransaction.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = state.transactions.filter((t) => t.id !== action.payload.id);
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message;
            });
    },
});

export default transactionSlice.reducer;
export const { editActive, editInactive } = transactionSlice.actions;
