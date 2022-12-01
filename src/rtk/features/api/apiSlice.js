/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'videoapi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',
    }),
    tagTypes: ['videos'], // whitelisting tags
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => `/videos`,
            keepUnusedDataFor: 10, // dhori, homepage theke ami onno page e gechi. ekhn ami jodi 10 second er moddhe home e back ashi, taile ar refetch korbe na, kintu jodi 10 second por ashi taile refetch korbe. ei hocche keep... er kahini
            providesTags: ['videos'], // ei request er cache ta ke videos tag diye chinhito korlam
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
        addVideo: builder.mutation({
            query: (data) => ({
                url: `/videos`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['videos'], // addVideo call success houa matro videos tag use kora prottek ta query refetch hobe
        }),
    }),
});

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
} = apiSlice;
