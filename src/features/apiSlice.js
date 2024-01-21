import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8010', 
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Post', 'User', 'Comment'],
  endpoints: (builder) => ({}),
});
