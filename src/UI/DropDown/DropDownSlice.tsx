import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  option: {
    value: 'NEWEST',
    label: 'По новизне',
  },
  // countryOption: {
  //   value: 'RUSSIA',
  //   label: 'Россия',
  // },
  countryOption: []
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
    }
  },
});

export const { changeOption, changeCountryOption } = dropDownSlice.actions;
export const dropDownReducer = dropDownSlice.reducer;
