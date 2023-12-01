import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';
import { IProductCard } from '../../components/ProductCard/ProductCardTypes';

export const publicProductApi = createApi({
  reducerPath: 'publicProductApi',
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
  endpoints: (build) => ({
    // Получение продукта по id
    publicProduct: build.query<IProductCard, string | undefined>({
      query: (productId) => `/product/${productId}`,
    }),
    // Получение списка продуктов/поиск/фильтрация
    // body {
    //   "categories": [
    //     0
    //   ],
    //   "countries": [
    //     "CHINA"
    //   ],
    //   "licenses": [
    //     "DEMO"
    //   ],
    //   "priceMax": 0,
    //   "priceMin": 0,
    //   "sellerIds": [
    //     0
    //   ],
    //   "text": "string",
    //   "vendorIds": [
    //     0
    //   ]
    // }
    publicProductList: build.query({
      query: ({minId, pageSize, sort, body}) => ({
        url: `/product/search?minId=${minId}&pageSize=${pageSize}&sort=${sort}`,
        method: 'GET',
        body,
      }),
    }),
  }),
});

export const {
  usePublicProductQuery,
  usePublicProductListQuery,
} = publicProductApi;
