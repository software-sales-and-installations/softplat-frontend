import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  setName: string;
  setId: string | number,
}

const initialState: IinitialState = {
  setName: '',
  setId: '',
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		productName: (state, action: PayloadAction<string>) => {
			state.setName = action.payload;
		},
    productId: (state, action: PayloadAction<string>) => {
      state.setId = action.payload;
    },
	},
});

export const productReducer = productSlice.reducer;
export const { productName, productId } = productSlice.actions;
