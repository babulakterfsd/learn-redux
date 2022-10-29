import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideo } from './videoAPI';

const initialState = {
    loading: false,
    video: {},
    error: '',
};

// async thunk(action)
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.error = '';
                state.loading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.loading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.error = action.error?.message;
                state.loading = false;
                state.video = {};
            });
    },
});

export default videoSlice.reducer;
