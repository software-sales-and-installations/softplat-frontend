import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQtySellerComplaints } from './SellerComplaintsTableTypes';

const initialState = { qty: 0 } as IQtySellerComplaints;

export const qtySellerComplaintsSlice = createSlice({
	name: 'qtySellerComplaints',
	initialState,
	reducers: {
		qtySellerComplaints: (state, action: PayloadAction<number>) => {
			state.qty = action.payload;
		},
	},
});

export const { reducer } = qtySellerComplaintsSlice;
export const { qtySellerComplaints } = qtySellerComplaintsSlice.actions;
