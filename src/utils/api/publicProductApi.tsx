import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const publicProductApi = createApi({
  reducerPath: 'publicProductApi',
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
    // Получение продукта по id
    publicProduct: build.query({
      query: (productId) => `/product/${productId}`,
      // providesTags: ['Product'],
    }),
    // Получение списка продуктов/поиск/фильтрация
    publicProductList: build.query({
      query: () => `/product/`,
    }),
  }),
});

export const {
  usePublicProductQuery,
  usePublicProductListQuery,
} = publicProductApi;
