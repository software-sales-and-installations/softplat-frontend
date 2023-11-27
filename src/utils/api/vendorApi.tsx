import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const vendorApi = createApi({
  reducerPath: 'vendorApi',
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
  tagTypes: ['Vendor'],
  endpoints: (build) => ({
    // Добавление вендора. Для админа
    // body {
    //   "country": "CHINA",
    //   "description": "string",
    //   "name": "string"
    // }
    vendorAdd: build.mutation({
      query: () => ({
        url: '/vendor/',
        method: 'POST',
      }),
    }),
    // Получение вендора по Id
    vendor: build.query({
      query: (vendorId) => `/vendor/${vendorId}/`,
      // providesTags: ['Vendor'],
    }),
    // Удаление вендора. Для админа
    vendorDelete: build.mutation({
      query: (vendorId) => ({
        url: `/vendor/${vendorId}/`,
        method: 'DELETE',
      }),
    }),
    // Изменение информации о вендоре. Для админа
    // body {
    //   "country": "CHINA",
    //   "description": "string",
    //   "name": "string"
    // }
    vendorChange: build.mutation({
      query: (vendorId) => ({
        url: `/vendor/${vendorId}/`,
        method: 'PATCH',
      }),
    }),
    // Добавление/обновление изображения вендора. Для админа
    // body {
    // "image": string
    // }
    vendorAddImage: build.mutation({
      query: (vendorId) => ({
        url: `/vendor/${vendorId}/image/`,
        method: 'POST',
      }),
    }),
    // Удаление изображения вендора. Для админа
    vendorDeleteImage: build.mutation({
      query: (vendorId) => ({
        url: `/vendor/${vendorId}/image/`,
        method: 'DELETE',
      }),
    }),
    // Получение списка вендоров с фильтрацией
    // pageSize def 20
    // body {
    //   "countries": [
    //     "CHINA"
    //   ],
    //   "text": "string"
    // }
    vendorList: build.query({
      query: () => `/vendor/search/`,
    }),
  }),
});

export const {
useVendorAddMutation,
useVendorQuery,
useVendorDeleteMutation,
useVendorChangeMutation,
useVendorAddImageMutation,
useVendorDeleteImageMutation,
useVendorListQuery,
} = vendorApi;