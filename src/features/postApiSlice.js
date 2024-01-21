import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForYouPost: builder.query({
      query: () => ({
        url: "/api/post",
      }),
      transformResponse: (posts) => posts.data,
      // keepUnusedDataFor: 5,
      providesTags: ["Post"],
    }),
    getSinglePost: builder.query({
      query: (id) => ({
        url: `/post/getPost/${id}`,
      }),
      transformResponse: (post) => post.data,
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: "/post/create",
        method: "POST",
        body: { post: post },
      }),
      invalidatesTags: ["Post"],
      // async onQueryStarted(post, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     apiSlice.util.updateQueryData(
      //       "getForYouPost",
      //       undefined,
      //       (postList) => {
      //         postList.unshift({
      //           comment: 0,
      //           _id: "659681a902d8afc0624e92d4",
      //           name: "Rahul",
      //           username: "Rahul",
      //           post: post,
      //           commentCount: 0,
      //           isRetweet: false,
      //           reTweetCount: 0,
      //           isLike: false,
      //           viewCount: 0,
      //           isBookmark: false,
      //           updatedAt: "2024-01-08T10:44:57.953Z",
      //           like: 0,
      //           retweet: 1,
      //         });

      //         postList[postIndex] = { ...postList[postIndex], ...updatedPost };
      //       }
      //     )
      //   );
      //   try {
      //     await queryFulfilled;
      //   } catch {
      //     patchResult.undo();
      //   }
      // },
    }),
    likedPost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/post/isLike/${id}`,
        method: "POST",
        // body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/post/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],

    }),
    retweetPost: builder.mutation({
      query: (id) => ({
        url: `/post/retweet/${id}`,
        method: "POST",
        // body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    bookmarkPost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/post/isBookmark/${id}`,
        method: "POST",
        // body: { id, ...updatedPost },
      }),
      invalidatesTags: ["Post"],
      async onQueryStarted(
        { id, ...updatedPost },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getForYouPost",
            undefined,
            (postList) => {
              console.log("🚀 ~ postList:", postList);
              const postIndex = postList.findIndex((el) => el._id === id);
              console.log("🚀 ~ postIndex:", postIndex);

              postList[postIndex] = { ...postList[postIndex], ...updatedPost };
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetForYouPostQuery,
  useGetSinglePostQuery,
  useCreatePostMutation,
  useLikedPostMutation,
  useDeletePostMutation,
  useRetweetPostMutation,
  useBookmarkPostMutation,
} = postApiSlice;
