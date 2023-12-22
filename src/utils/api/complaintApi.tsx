import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const complaintApi = createApi({
  reducerPath: 'userComplaintApi',
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
  tagTypes: ['Complaint'],
  endpoints: (build) => ({
    //Создание жалобы покупателем
    userComplaint: build.mutation({
      query: ({productId, reason}) => ({
        url: `/complaint/${productId}?reason=${reason}`,
        method: 'POST',
      }),
    }),
    complaintList: build.query({
      query: () => '/complaint/admin',
    }),
    complaintSellerList: build.query({
      query: () => '/complaint/seller'
    })
  }),
});

export const {
  useUserComplaintMutation,
  useComplaintListQuery,
  useComplaintSellerListQuery
} = complaintApi;
