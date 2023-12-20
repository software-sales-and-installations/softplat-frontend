import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const complaintApi = createApi({
    reducerPath: 'complaintApi',
    baseQuery: fetchBaseQuery({
      baseUrl: API_BASE_URL,
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')
        if (token) {
          headers.set('authorization', `${token}`);
          headers.set('X-Sharer-User-Id', `${userId}`)
        }
        return headers;
      },
    }),
    tagTypes: ['Complaint'],
    endpoints: (build) => ({
        complaintList: build.query({
            query: () => '/complaint/admin',
          }),
        complaintSellerList: build.query({
            query: () => '/complaint/seller'
        })
    })
})
export const {
    useComplaintListQuery,
    useComplaintSellerListQuery
} = complaintApi
