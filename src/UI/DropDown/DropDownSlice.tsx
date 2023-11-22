import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOption } from './DropDownTypes';

const initialState = {
  option: {
    value: 'NEWEST',
    label: 'По новизне',
  },
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
