import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  option: {
    value: 'NEWEST',
    label: 'По новизне',
  },
  countryOption: [],
  vendorOption: [],
  complaintOption: {
    value: '',
    label: '',
  },
  orgFormOption: {
    value: '',
    label: ''
  }
};

const dropDownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    changeOption: (state, action) => {
      state.option = action.payload;
    },
    changeCountryOption: (state, action) => {
      state.countryOption = action.payload
    },
    changeVendorOption: (state, action) => {
      state.vendorOption = action.payload
    },
    changeComplaintOption: (state, action ) => {
      state.complaintOption = action.payload
    },
    changeOrgFormOption: (state, action) => {
      state.orgFormOption = action.payload
    }
  },
});

export const { changeOption, changeCountryOption, changeVendorOption, changeComplaintOption, changeOrgFormOption } = dropDownSlice.actions;
export const dropDownReducer = dropDownSlice.reducer;
