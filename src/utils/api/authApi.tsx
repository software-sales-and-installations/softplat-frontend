import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    // Авторизация
    // Body {
    //   "confirmPassword": "string",
    //   "email": "string",
    //   "password": "string"
    // }
    authLogin: build.mutation({
      query: () => ({
        url: '/auth/login/',
        method: 'POST',
        // providesTags: ['Auth'],
      }),
    }),
    // Выход
    authLogout: build.mutation({
      query: () => ({
        url: '/auth/logout/',
        method: 'POST',
      }),
    }),
    // Смена пароля
    // Body {
    //   "confirmPassword": "string",
    //   "email": "string",
    //   "password": "string"
    // }
    authChangePassword: build.mutation({
      query: () => ({
        url: '/change/pass/',
        method: 'POST',
      }),
    }),
    // Регистрация
    // Body {
    //   "confirmPassword": "string",
    //   "email": "string",
    //   "name": "string",
    //   "password": "string",
    //   "phone": "string",
    //   "role": "ADMIN",
    //   "status": "ACTIVE"
    // }
    authRegister: build.mutation({
      query: () => ({
        url: '/registration/',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useAuthLoginMutation,
  useAuthLogoutMutation,
  useAuthChangePasswordMutation,
  useAuthRegisterMutation,
} = authApi;
