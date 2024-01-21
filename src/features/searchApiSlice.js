import { apiSlice } from "./apiSlice";

export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => ({
        url: `/search/trending`,
      }),
      transformResponse: (post) => post.data,
    }),
    getNews: builder.query({
      query: () => ({
        url: `/search/trendingNews`,
      }),
      transformResponse: (post) => post.data,
    }),
    getSports: builder.query({
      query: () => ({
        url: `/search/trendingSports`,
      }),
      transformResponse: (post) => post.data,
    })
  }),
});

export const { useGetTrendingQuery, useGetNewsQuery, useGetSportsQuery } = searchApiSlice;
