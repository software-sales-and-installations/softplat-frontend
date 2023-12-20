import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../constants';

export const complaintApi = createApi({
    reducerPath: 'complaintApi',
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
    tagTypes: ['Complaint'],
    endpoints: (build) => ({
        complaintList: build.query({
            query: () => '/complaint/admin',
          }),
    })
})
export const {
    useComplaintListQuery
} = complaintApi
