import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  option: {
    value: 'NEWEST',
    label: 'По новизне',
  },
  countryOption: {
    value: '',
    label: '',
  }
};

const dropDownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    changeOption: (state, action) => {
      state.option = action.payload;
    },
  },
});

export const { changeOption } = dropDownSlice.actions;
export const dropDownReducer = dropDownSlice.reducer;
