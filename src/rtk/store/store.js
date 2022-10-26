import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import myMiddleware from '../middlewares/myMiddleware';

const store = configureStore({
    reducer: {
        videos: videosReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
