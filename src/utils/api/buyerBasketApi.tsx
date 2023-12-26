import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const buyerBasketApi = createApi({
  reducerPath: 'buyerBasketApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        headers.set('authorization', `${token}`);
        headers.set('X-Sharer-User-Id', `${userId}`);
      }
      return headers;
    },
  }),
  tagTypes: ['BuyerBasket'],
  endpoints: build => ({
    buyerBasketInfo: build.query({
      query: () => '/basket',
    }),
    buyerBasketAddItem: build.mutation({
      query: ({ productId, installation }) => ({
        url: `/basket/${productId}?installation=${installation}`,
        method: 'POST',
      }),
    }),
    buyerBasketDeleteItem: build.mutation({
      query: ({ productId, installation }) => ({
        url: `/basket/product/${productId}?installation=${installation}`,
        method: 'DELETE',
      }),
    }),
    buyerBasketClear: build.mutation({
      query: () => ({
        url: `/basket`,
        method: 'DELETE',
      }),
    }),
    buyerBasketDeletePosition: build.mutation({
      query: position => ({
        url: `/basket/${position}`,
        method: 'DELETE',
      }),
    }),
    buyerBasketSaveCart: build.mutation({
      query: body => ({
        url: `/basket`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useBuyerBasketInfoQuery,
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  useBuyerBasketClearMutation,
  useBuyerBasketDeletePositionMutation,
  useBuyerBasketSaveCartMutation,
} = buyerBasketApi;
