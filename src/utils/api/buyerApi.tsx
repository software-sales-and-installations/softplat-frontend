import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const buyerApi = createApi({
  reducerPath: 'buyerControlApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['BuyerControl'],
  endpoints: (build) => ({
    // Получение списка покупателей, доступ для админа
    // body {
    // "minId": integer,
    // "pageSize": integer,
    // }
    buyerAllMembers: build.query({
      query: () => '/buyer/',
      // providesTags: ['BuyerControl'],
    }),
    // Обновление данных о себе покупателем
    // body {
    // "email": "string",
    // "name": "string",
    // "phone": "string"
    // }
    buyerChangeInfo: build.mutation( {
      query: () => ({
        url: '/buyer/',
        method: 'PATCH',
      }),
    }),
    // Получение покупателя по id, доступ для покупателя и админа
    buyerInfo: build.query({
      query: (userId) => `/buyer/${userId}/`,
    }),
    // Просмотр избранных товаров. Покупатель
    buyerFavorites: build.query({
      query: () => '/buyer/favorites/',
    }),
    // Добавление товара в избранное
    buyerAddFavorites: build.mutation({
      query: (productId) => ({
        url: `/buyer/favorites/${productId}/`,
        method: 'POST',
      }),
    }),
    // Удаление товара из избранное
    buyerDeleteFavorites: build.mutation({
      query: (productId) => ({
        url: `/buyer/favorites/${productId}/`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useBuyerAllMembersQuery,
  useBuyerChangeInfoMutation,
  useBuyerInfoQuery,
  useBuyerFavoritesQuery,
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
} = buyerApi;
