import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
console.log("🚀 ~ BASE_URL:", BASE_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: "include"
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Post", "User", "Comment"],
  endpoints: (builder) => ({})
});
