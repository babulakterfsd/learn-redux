import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';

const initialState = {
    loading: false,
    videos: [],
    error: '',
};

// async thunk(action)
export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos',
    async ({ tags, searchKeyword, currentPage, author }) => {
        const videos = await getVideos(tags, searchKeyword, currentPage, author);
        return videos;
    }
);

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.error = action.error?.message;
                state.loading = false;
                state.videos = [];
            });
    },
});

export default videosSlice.reducer;
