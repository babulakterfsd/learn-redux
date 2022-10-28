import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/videosSlice';
import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
