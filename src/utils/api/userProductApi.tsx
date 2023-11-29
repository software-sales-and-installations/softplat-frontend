import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const userProductApi = createApi({
  reducerPath: 'userProductApi',
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
  tagTypes: ['UserProduct'],
  endpoints: (build) => ({
    // Создание карточки товара
    // body {
    //   "category": 0,
    //   "description": "string",
    //   "installation": true,
    //   "installationPrice": 0,
    //   "license": "DEMO",
    //   "name": "string",
    //   "price": 0,
    //   "quantity": 0,
    //   "vendor": 0,
    //   "version": "string"
    // }
    productCreate: build.mutation({
      query: () => ({
        url: '/product/',
        method: 'POST',
        // providesTags: ['UserProduct'],
      }),
    }),
    // Удаление карточки товара. Для админа
    productDelete: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: 'DELETE',
      }),
    }),
    // Удаление изображения карточки товара. Для админа
    productDeleteImage: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}/image`,
        method: 'DELETE',
      }),
    }),
    // Добавление/обновление изображения карточки товара
    // body {
    // "image" : "string"
    // }
    productAddImage: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}/image/create`,
        method: 'POST',
      }),
    }),
    // Отклонение/одобрение изображения карточки товара. Доступ для админа
    // body {
    // "status" : DRAFT/PUBLISHED/REJECTED/SHIPPED
    // }
    productModerate: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}/moderation`,
        method: 'PATCH',
      }),
    }),
    // Отправка своего товара на модерацию админом
    productSendToModeration: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}/send`,
        method: 'PATCH',
      }),
    }),
    // Редактирование своей карточки товара
    // body {
    //   "category": 0,
    //   "description": "string",
    //   "installation": true,
    //   "installationPrice": 0,
    //   "license": "DEMO",
    //   "name": "string",
    //   "price": 0,
    //   "quantity": 0,
    //   "vendor": 0,
    //   "version": "string"
    // }
    productUpdate: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}/update`,
        method: 'PATCH',
      }),
    }),
    // Удаление своей карточки товара
    productDeleteOwnCard: build.mutation({
      query: (productId) => ({
        url: `/product/products/${productId}/`,
        method: 'DELETE',
      }),
    }),
    // Удаление изображения своей карточки товара
    productDeleteOwnCardImage: build.mutation({
      query: (productId) => ({
        url: `/product/products/${productId}/image/delete`,
        method: 'DELETE',
      }),
    }),
    // Получение списка товаров на модерацию. Для админа
    // pageSize def 20
    productList: build.query({
      query: () => ({
        url: `/product/shipped/`,
      }),
    }),
  }),
});

export const {
  useProductCreateMutation,
  useProductDeleteMutation,
  useProductDeleteImageMutation,
  useProductAddImageMutation,
  useProductModerateMutation,
  useProductSendToModerationMutation,
  useProductUpdateMutation,
  useProductDeleteOwnCardMutation,
  useProductDeleteOwnCardImageMutation,
  useProductListQuery,
} = userProductApi;