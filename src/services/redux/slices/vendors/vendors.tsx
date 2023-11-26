import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../../../utils/constants';

interface IVendorState {
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: unknown;
  vendor: IVendor;
  vendors: IVendor[];
}

const fetchAllVendors = createAsyncThunk<IVendor[], undefined>(
  'vendors/fetchAllVendors',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/vendors/search`);
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
  vendors: [],
};

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllVendors.fulfilled, (state, action) => {
      state.vendors = action.payload;
    })
  }
});

export default vendorsSlice.reducer;
