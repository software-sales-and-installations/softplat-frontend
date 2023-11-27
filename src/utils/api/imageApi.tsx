import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const imageApi = createApi({
  reducerPath: 'imageApi',
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
  tagTypes: ['Image'],
  endpoints: (build) => ({
    // Получение изображения по id
    image: build.query({
      query: (id) => `/image/${id}`,
      // providesTags: ['Image'],
    }),
  }),
});

export const {
  useImageQuery,
} = imageApi;
