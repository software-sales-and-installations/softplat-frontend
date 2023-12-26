import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';
import { IComments } from '../../components/Product/Reviews/ReviewsTypes.tsx';

interface IProps {
  productId: string | undefined;
  minId: string;
  pageSize: string;
}
export const publicCommentApi = createApi({
  reducerPath: 'publicCommentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (build) => ({

    // Получение отзывов по id продукта
    productComments: build.query<IComments, IProps>({
      query: ({productId, minId, pageSize}) => `/comment/${productId}/product?minId=${minId}&pageSize=${pageSize}`,
    }),
  }),
});

export const {
  useProductCommentsQuery,
} = publicCommentApi;
