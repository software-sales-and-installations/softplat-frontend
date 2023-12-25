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
      query: ({productId, reason, body}) => ({
        url: `/complaint/${productId}?reason=${reason}`,
        method: 'POST',
        body,
      }),
    }),
    complaintList: build.query({
      query: () => '/complaint/admin',
    }),
    complaintProductAdmin: build.query({
      query: ({productId, minId, pageSize}) => `/complaint/admin/${productId}/product?minId=${minId}&pageSize=${pageSize}`,
    }),
    complaintProductSeller: build.query({
      query: ({productId, minId, pageSize}) => `/complaint/seller/${productId}/product?minId=${minId}&pageSize=${pageSize}`,
    }),
    complaintModeration: build.mutation({
      query: ({complaintId, body}) => ({
        url: `/complaint/admin/${complaintId}`,
        method: 'PATCH',
        body,
      })
    }),
    complaintSellerList: build.query({
      query: () => '/complaint/seller'
    })
  }),
});

export const {
  useUserComplaintMutation,
  useComplaintListQuery,
  useComplaintProductAdminQuery,
  useComplaintProductSellerQuery,
  useComplaintModerationMutation,
  useComplaintSellerListQuery
} = complaintApi;
