import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface ISuccessPay {
    isSuccessPay: boolean;
    isNotSuccessPay: string;
}

const initialState = { 
    isSuccessPay: false,
    isNotSuccessPay: ''
 } as ISuccessPay;

export const isSuccessCardDataSlice = createSlice({
	name: 'payProcedure',
	initialState,
	reducers: {
		isSuccessPay: (state, action: PayloadAction<boolean>) => {
			state.isSuccessPay= action.payload;
		},
        isNotSuccessPay: (state, action: PayloadAction<string>) => {
			state.isNotSuccessPay= action.payload;
		},
	},
});

export const { reducer } = isSuccessCardDataSlice;
export const { isSuccessPay, isNotSuccessPay } = isSuccessCardDataSlice.actions;
