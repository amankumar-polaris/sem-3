import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const rtkQuery = createApi({
    reducerPath: 'rtkQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),

    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => 'posts' }),
        addPost: builder.mutation({
            query: (data) => ({
                url: 'posts',
                method: 'POST',
                body: data
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = rtkQuery