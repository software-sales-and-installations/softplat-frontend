import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface IPayPopup {
    isSuccessCardData: boolean;
}

const initialState = { isSuccessCardData: false } as IPayPopup;

export const isSuccessCardDataSlice = createSlice({
	name: 'isSuccessCardData',
	initialState,
	reducers: {
		isSuccessCardData: (state, action: PayloadAction<boolean>) => {
			state.isSuccessCardData= action.payload;
		},
	},
});

export const { reducer } = isSuccessCardDataSlice;
export const { isSuccessCardData } = isSuccessCardDataSlice.actions;
