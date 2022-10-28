import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getTags from './tagsAPI';

const initialState = {
    loading: false,
    tags: [],
    error: '',
};

// async thunk(action)
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.loading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.error = action.error?.message;
                state.loading = false;
                state.tags = [];
            });
    },
});

export default tagsSlice.reducer;
