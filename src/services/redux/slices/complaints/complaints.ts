import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IComplaintsState {
  isDelete: boolean;
}

const initialComplaintsState: IComplaintsState = {
  isDelete: false,
};

const complaintsSlice = createSlice({
  name: 'complaints',
  initialState: initialComplaintsState,
  reducers: {
    setIsDelete: (state, action: PayloadAction<boolean>) => {
      state.isDelete = action.payload;
    },
  },
});


export const { setIsDelete } = complaintsSlice.actions;
export const complaintsReducer = complaintsSlice.reducer;
