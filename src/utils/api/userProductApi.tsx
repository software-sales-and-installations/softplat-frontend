import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const userProductApi = createApi({
  reducerPath: 'userProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId')
      if (token) {
        headers.set('authorization', `${token}`);
        headers.set('X-Sharer-User-Id', `${userId}`);
      }
      return headers;
    },
  }),
  tagTypes: ['UserProduct'],
  endpoints: build => ({
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
      query: (body) => ({
        url: '/product',
        method: 'POST',
        body
        // providesTags: ['UserProduct'],
      }),
    }),
    // Удаление карточки товара. Для админа
    productDelete: build.mutation({
      query: productId => ({
        url: `/product/${productId}`,
        method: 'DELETE',
      }),
    }),
    // Удаление изображения карточки товара. Для админа
    productDeleteImage: build.mutation({
      query: productId => ({
        url: `/product/${productId}/image`,
        method: 'DELETE',
      }),
    }),
    // Добавление/обновление изображения карточки товара
    // body {
    // "image" : "string"
    // }
    productAddImage: build.mutation({
      query: ({ productId, body }) => ({
        url: `/product/${productId}/image/create`,
        method: 'POST',
        body,
      }),
    }),
    // Отклонение/одобрение изображения карточки товара. Доступ для админа
    // body {
    // "status" : DRAFT/PUBLISHED/REJECTED/SHIPPED
    // }
    productModerate: build.mutation({
      query: ({ productId, status }) => ({
        url: `/product/${productId}/moderation?status=${status}`,
        method: 'PATCH',
      }),
    }),
    // Отправка своего товара на модерацию админом
    productSendToModeration: build.mutation({
      query: ({productId}) => ({
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
      query: ({ productId, body }) => ({
        url: `/product/${productId}/update`,
        method: 'PATCH',
        body,
      }),
    }),
    // Удаление своей карточки товара
    productDeleteOwnCard: build.mutation({
      query: (productId) => ({
        url: `/product/${productId}/delete`,
        method: 'DELETE',
      }),
    }),
    // Удаление изображения своей карточки товара
    productDeleteOwnCardImage: build.mutation({
      query: productId => ({
        url: `/product/${productId}/image/delete`,
        method: 'DELETE',
      }),
    }),
    // Получение списка рекоммендованых товаров. Для зарег. пользователей
    // pageSize def 5
    productRecs: build.query({
      query: ({minId, pageSize}) => ({
        url: `/product/recommendations?minId=${minId}&pageSize=${pageSize}`,
      }),
    }),
    // Получение списка товаров c сортировкой по статусу. Для админа
    // minId def 0
    // pageSize def 20
    productList: build.query({
      query: ({
        minId,
        pageSize,
        status,
      }: {
        minId?: number;
        pageSize?: number;
        status: 'DRAFT' | 'PUBLISHED' | 'REJECTED' | 'SHIPPED';
      }) => ({
        url: `/product/admin?${minId ? `minId=${minId}&` : ''}${
          pageSize ? `pageSize=${pageSize}&` : ''
        }status=${status}`,
      }),
    }),
    //список товаров для продавца с сортировкой
    productSellerList: build.query({
      query: ({
        minId,
        pageSize,
        status,
      }: {
        minId?: number;
        pageSize?: number;
        status: 'DRAFT' | 'PUBLISHED' | 'REJECTED' | 'SHIPPED';
      }) => ({
        url: `/product/seller?${minId ? `minId=${minId}&` : ''}${
          pageSize ? `pageSize=${pageSize}&` : ''
        }status=${status}`,
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
  useProductRecsQuery,
  useProductListQuery,
  useProductSellerListQuery
} = userProductApi;
