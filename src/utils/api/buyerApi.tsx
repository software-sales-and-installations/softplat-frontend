import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const buyerApi = createApi({
  reducerPath: 'buyerControlApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (token) {
        headers.set('authorization', `${token}`);
        headers.set('X-Sharer-User-Id', `${userId}`);
      }
      return headers;
    },
  }),
  tagTypes: ['BuyerControl'],
  endpoints: (build) => ({
    // Получение списка покупателей, доступ для админа
    // params {
    // "minId": integer,
    // "pageSize": integer,
    // }
    buyerAllMembers: build.query({
      query: ({minId, pageSize}) => ({
        url: `/buyer?minId=${minId}&pageSize=${pageSize}`,
      }),
    }),
    // Обновление данных о себе покупателем.
    // body {
    // "email": "string",
    // "name": "string",
    // "phone": "string"
    // }
    buyerChangeInfo: build.mutation( {
      query: (body) => ({
        url: '/buyer',
        method: 'PATCH',
        body,
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
    // Добавление товара в избранное. Покупатель
    buyerAddFavorites: build.mutation({
      query: (productId) => ({
        url: `/buyer/favorites/${productId}/`,
        method: 'POST',
      }),
    }),
    // Удаление товара из избранное. Покупатель
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
