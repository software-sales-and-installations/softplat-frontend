import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const submitImageApi = createApi({
    reducerPath: 'submitImageApi',
    baseQuery: fetchBaseQuery({
      baseUrl: API_BASE_URL,
      prepareHeaders: headers => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')
        if (token) {
        //   headers.set('Content-Type', 'multipart/form-data')
          headers.set('authorization', `${token}`);
          headers.set('X-Sharer-User-Id', `${userId}`);
        }
        return headers;
      },
    }),
    tagTypes: ['submitImage'],
    endpoints: build => ({
        productSubmitImage: build.mutation({
            query: ({ productId, body }) => ({
              url: `/product/${productId}/image`,
              method: 'POST',
              body
            }),
          }),
    })

})
export const {
    useProductSubmitImageMutation
} = submitImageApi
