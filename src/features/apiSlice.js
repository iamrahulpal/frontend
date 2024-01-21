import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://backend-deploy-gamma.vercel.app', 
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Post', 'User', 'Comment'],
  endpoints: (builder) => ({}),
});
