import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../../../utils/constants';

interface IVendors {
  vendors: IVendor[];
}

interface IVendorState {
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: unknown;
  vendor: IVendor;
  vendors: IVendors;
}

export const fetchAllVendors = createAsyncThunk<IVendors, undefined>(
  'vendors/fetchAllVendors',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/vendor/search`);
      return fulfillWithValue(data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const fetchSingleVendor = createAsyncThunk<IVendor, number>(
  'vendors/fetchSingleVendor',
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/vendor${id}`);
      return fulfillWithValue(data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const initialState: IVendorState = {
  status: 'idle',
  error: null,
  vendor: {
    name: '',
    description: '',
    id: 0,
    country: '',
    image: {
      url: '',
      name: '',
      id: 0,
      size: 0,
      contentType: '',
    },
  },
  vendors: { vendors: [] },
};

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllVendors.fulfilled, (state, action) => {
        state.vendors = action.payload;
      })
      .addCase(fetchSingleVendor.fulfilled, (state, action) => {
        state.vendor = action.payload;
      });
  },
});

export default vendorsSlice.reducer;
