/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'videoapi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => `/videos`,
            keepUnusedDataFor: 60,
        }),
        getVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`,
        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                const tags = title.split(' ');
                const likes = tags.map((tag) => `title_like=${tag}`);
                const queryString = `/videos?${likes.join('&')}&id_ne=${id}&_limit=4`;
                return queryString;
            },
        }),
    }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } = apiSlice;
