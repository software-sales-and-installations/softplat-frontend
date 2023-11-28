import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const buyerOrderApi = createApi({
  reducerPath: 'buyerOrderApi',
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
  tagTypes: ['BuyerOrder'],
  endpoints: (build) => ({
    // Список: мои покупки.Покупатель
    orderAll: build.query({
      query: () => '/orders',
      // providesTags: ['BuyerOrder'],
    }),
    // Оформление заказа
    // body {
    //   "basketPositionIds": [
    //     0
    //   ]
    // }
    orderMake: build.mutation({
      query: () => ({
        url: '/orders',
        method: 'POST',
      }),
    }),
    // Получение конкретной покупкиюПокупатель
    orderInfo: build.query( {
      query: (userId) => `/order/${userId}`,
    }),
  }),
});

export const {
  useOrderAllQuery,
  useOrderMakeMutation,
  useOrderInfoQuery,
} = buyerOrderApi;
