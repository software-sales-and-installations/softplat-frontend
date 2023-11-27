import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const adminApi = createApi({
  reducerPath: 'adminApi',
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
  // tagTypes: ['Admin'],
  endpoints: (build) => ({
    // Получение информации об админе - просмотр своего ЛК
    adminInfo: build.query({
      query: () => '/admin/',
      // providesTags: ['Admin'],
    }),
  }),
});

export const {
  useAdminInfoQuery,
} = adminApi;
