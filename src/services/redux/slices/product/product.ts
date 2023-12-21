import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  setName: string;
}

const initialState: IinitialState = {
  setName: ''
};

const productNameSlice = createSlice({
	name: 'productName',
	initialState,
	reducers: {
		productName: (state, action: PayloadAction<string>) => {
			state.setName = action.payload;
		},
	},
});

export const { reducer } = productNameSlice;
export const { productName } = productNameSlice.actions;
