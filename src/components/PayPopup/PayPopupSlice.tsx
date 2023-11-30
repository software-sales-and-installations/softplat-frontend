import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface IPayPopup {
    isSuccessPay: boolean;
}

const initialState = { isSuccessPay: false } as IPayPopup;

export const isSuccessPaySlice = createSlice({
	name: 'isSuccessPay',
	initialState,
	reducers: {
		isSuccessPay: (state, action: PayloadAction<boolean>) => {
			state.isSuccessPay= action.payload;
		},
	},
});

export const { reducer } = isSuccessPaySlice;
export const { isSuccessPay } = isSuccessPaySlice.actions;
