import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideo, updateReaction } from './videoAPI';

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

export const updateVideoReaction = createAsyncThunk(
    'video/updateReaction',
    async ({ id, reaction }) => {
        const updatedVideo = await updateReaction({ id, reaction });
        return updatedVideo;
    }
);

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
        builder.addCase(updateVideoReaction.fulfilled, (state, action) => {
            state.video.likes = action.payload.likes;
            state.video.unlikes = action.payload.unlikes;
        });
    },
});

export default videoSlice.reducer;
