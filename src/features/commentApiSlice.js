import { apiSlice } from "./apiSlice";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (data) => ({
        url: `/post/createComment`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Comment"],
      invalidatesTags: ['Post'],
    }),
    getPostComments: builder.query({
      query: (id) => ({
        url: `/post/comment/${id}`,
      }),
      transformResponse: (post) => post.data,
    }),
  }),
});

export const { useCreateCommentMutation, useGetPostCommentsQuery } = commentApiSlice;
