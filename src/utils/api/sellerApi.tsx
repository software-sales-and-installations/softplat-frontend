import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const sellerApi = createApi({
  reducerPath: 'sellerApi',
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
  tagTypes: ['Seller'],
  endpoints: build => ({
    // Список продавцов
    // pageSize def 20
    sellerAllMembers: build.query({
      query: ({ minId, pageSize }) =>
        `/seller?minId=${minId}&pageSize=${pageSize}`,
      // providesTags: ['Seller'],
    }),
    // Обновление данных о себе продавцом
    // body {
    //   "email": "string",
    //   "name": "string",
    //   "phone": "string"
    // }
    sellerChangeData: build.mutation({
      query: () => ({
        url: '/seller/',
        method: 'PATCH',
      }),
    }),
    // Удаление изображения профиля продавца админом
    sellerDeletePhotoByAdmin: build.mutation({
      query: sellerId => ({
        url: `/seller/${sellerId}/image/`,
        method: 'DELETE',
      }),
    }),
    // Получение продавца по Id
    sellerInfo: build.query({
      query: userId => `/seller/${userId}/`,
    }),
    // Добавление/обновление изображения своего профиля продавцом
    // body {
    //   "image": "string",
    // }
    sellerAddPhoto: build.mutation({
      query: body => ({
        url: '/seller/account/image/',
        method: 'POST',
        body,
      }),
    }),
    // Удаление изображения своего профиля продавцом
    sellerDeletePhoto: build.mutation({
      query: () => ({
        url: '/seller/account/image/',
        method: 'DELETE',
      }),
    }),
    // Удаление своих банковских реквизитов продавцом
    sellerDeleteBank: build.mutation({
      query: () => ({
        url: '/seller/bank/',
        method: 'DELETE',
      }),
    }),
    // Добавление своих банковских реквизитов продавцом
    // body {
    //   "account": "string"
    // }
    sellerChangeBank: build.mutation({
      query: body => ({
        url: '/seller/bank/',
        method: 'PATCH',
        body,
      }),
    }),
    // Получение банковских реквизитов продавцов по id продавца
    sellerGetBank: build.query({
      query: () => ({
        url: `/seller/bank/`,
      }),
    }),
    // Получение списка товаров c сортировкой по статусу
    // minId def 0
    // pageSize def 20
    sellerProductList: build.query({
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
  useSellerAllMembersQuery,
  useSellerChangeDataMutation,
  useSellerDeletePhotoByAdminMutation,
  useSellerInfoQuery,
  useSellerAddPhotoMutation,
  useSellerDeletePhotoMutation,
  useSellerDeleteBankMutation,
  useSellerChangeBankMutation,
  useSellerGetBankQuery,
  useSellerProductListQuery,
} = sellerApi;
