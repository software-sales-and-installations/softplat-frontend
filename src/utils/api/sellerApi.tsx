import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const sellerApi = createApi({
  reducerPath: 'sellerApi',
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
  tagTypes: ['Seller'],
  endpoints: (build) => ({
    sellerAllMembers: build.query({
      query: () => '/seller/',
      // providesTags: ['Seller'],
    }),
    sellerChangeData: build.mutation( {
      query: () => ({
        url: '/seller',
        method: 'PATCH',
      }),
    }),
    sellerDeletePhotoByAdmin: build.mutation( {
      query: (sellerId) => ({
        url: `/seller/${sellerId}/image`,
        method: 'DELETE',
      }),
    }),
    sellerInfo: build.query( {
      query: (userId) => `/seller/${userId}`,
    }),
    sellerAddPhoto: build.mutation({
      query: () => ({
        url: '/seller/account/image',
        method: 'POST',
      }),
    }),
    sellerDeletePhoto: build.mutation({
      query: () => ({
        url: '/seller/account/image',
        method: 'DELETE',
      }),
    }),
    sellerDeleteBank: build.mutation({
      query: () => ({
        url: '/seller/bank',
        method: 'DELETE',
      }),
    }),
    sellerChangeBank: build.mutation({
      query: () => ({
        url: '/seller/bank',
        method: 'PATCH',
      }),
    }),
    sellerGetBank: build.query({
      query: (userId) => ({
        url: `/seller/bank/${userId}`,
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
} = sellerApi;
