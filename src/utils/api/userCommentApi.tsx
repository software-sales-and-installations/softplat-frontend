import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const userCommentApi = createApi({
  reducerPath: 'userCommentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: headers => {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (userId && token) {
        headers.set('X-Sharer-User-Id', `${userId}`);
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({

    //Создание отзыва покупателем
    userComment: build.mutation({
      query: ({productId, body}) => ({
        url: `/comment/${productId}/create`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useUserCommentMutation,
} = userCommentApi;
