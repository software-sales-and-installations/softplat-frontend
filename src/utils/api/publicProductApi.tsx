import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';
import { IProductCard, ISimilarProducts } from '../../components/ProductCard/ProductCardTypes';
interface IProps {
  productId: string;
  minId: string;
  pageSize: string;
}
export const publicProductApi = createApi({
  reducerPath: 'publicProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (build) => ({
    // Получение продукта по id
    publicProduct: build.query<IProductCard, string | undefined>({
      query: (productId) => `/product/${productId}`,
    }),
    // Получение аналогичных продуктов по id продукта
    similarProducts: build.query<ISimilarProducts, IProps>({
      query: ({productId , minId, pageSize}) => `/product/${productId}/similar?minId=${minId}&pageSize=${pageSize}`,
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
  useSimilarProductsQuery,
  usePublicProductListQuery,
} = publicProductApi;
