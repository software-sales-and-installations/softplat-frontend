import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const buyerBasketApi = createApi({
  reducerPath: 'buyerBasketApi',
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
  tagTypes: ['BuyerBasket'],
  endpoints: (build) => ({
  // Просмотр своей корзины
  buyerBasketInfo: build.query({
  query: () => '/buyer/basket/',
}),
// Добавление продукта в свою карзину
// Body {
// "installation": boolean,
// }
    buyerBasketAddItem: build.mutation( {
      query: (productId) => ({
        url: `/buyer/basket/${productId}/`,
        method: 'POST',
      }),
    }),
    // Удаление продукта из своей корзины
    // Body {
    // "installation": boolean,
    //    Так как в корзине может лежать два одинаковых товара, но один с установкой, а второй без установки, необходимо выбрать, какой из них удалить
    // }
    buyerBasketDeleteItem: build.mutation( {
      query: (productId) => ({
        url: `/buyer/basket/${productId}/`,
        method: 'DELETE',
      }),
    }),
   }),
});

export const {
  useBuyerBasketInfoQuery,
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
} = buyerBasketApi;
