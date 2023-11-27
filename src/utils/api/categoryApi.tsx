import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
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
  tagTypes: ['Category'],
  endpoints: (build) => ({
    //Получение списка категорий, доступ для админа
    categoryList: build.query({
      query: () => '/category/',
      // providesTags: ['Category'],
    }),
    // Создание категорий
    // body {
    // {
    //  "name": "string"
    //}
    categoryAdd: build.mutation( {
      query: () => ({
        url: '/category/',
        method: 'POST',
      }),
    }),
    // Получение категории по id
    category: build.query({
      query: (catId) => `/category/${catId}`,
    }),
    // Удаление категорий
    categoryDelete: build.mutation( {
      query: (catId) => ({
        url: `/category/${catId}`,
        method: 'DELETE',
      }),
    }),
    // Изменение категории
    // body {
    // {
    //  "name": "string"
    //}
    categoryChange: build.mutation({
      query: (catId) => ({
        url: `/category/${catId}`,
        method: 'PATCH',
      }),
    }),
  }),
});

export const {
  useCategoryListQuery,
  useCategoryAddMutation,
  useCategoryQuery,
  useCategoryDeleteMutation,
  useCategoryChangeMutation,
} = categoryApi;
