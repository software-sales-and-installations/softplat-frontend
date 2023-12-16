import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface ISuccessPay {
    isSuccessPay: number;
    isNotSuccessPay: string;
}

const initialState = { 
    isSuccessPay: 0,
    isNotSuccessPay: ''
 } as ISuccessPay;

export const isSuccessPaySlice = createSlice({
	name: 'payProcedure',
	initialState,
	reducers: {
		isSuccessPay: (state, action: PayloadAction<number>) => {
			state.isSuccessPay= action.payload;
		},
        isNotSuccessPay: (state, action: PayloadAction<string>) => {
			state.isNotSuccessPay= action.payload;
		},
	},
});

export const { reducer } = isSuccessPaySlice;
export const { isSuccessPay, isNotSuccessPay } = isSuccessPaySlice.actions;
