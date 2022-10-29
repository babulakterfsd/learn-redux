import { configureStore } from '@reduxjs/toolkit';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import videosReducer from '../features/videos/videosSlice';
import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
