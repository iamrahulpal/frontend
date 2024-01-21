import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
    verfiyOtp: builder.mutation({
      query: (data) => ({
        url: "/user/verify",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/user/logout',
        method: "POST"
      })
    })
  }),
});

export const { useRegisterMutation, useVerfiyOtpMutation, useLoginMutation, useLogoutMutation } = userApiSlice;
