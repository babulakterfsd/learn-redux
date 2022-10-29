import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRelatedVideos } from './relatedVideosAPI';

const initialState = {
    loading: false,
    videos: [],
    error: '',
};

// async thunk(action)
export const fetchRelatedVideos = createAsyncThunk(
    'relatedVideos/fetchRelatedVideos',
    async ({ tags, currentVideoId }) => {
        const videos = await getRelatedVideos(tags, currentVideoId);
        return videos;
    }
);

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.error = action.error?.message;
                state.loading = false;
                state.videos = [];
            });
    },
});

export default relatedVideosSlice.reducer;
