import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IQtyComplaints } from './AdminComplaintsType';

const initialState = { qty: 0 } as IQtyComplaints;

export const qtyComplaintsSlice = createSlice({
	name: 'qtyComplaints',
	initialState,
	reducers: {
		qtyComplaints: (state, action: PayloadAction<number>) => {
			state.qty = action.payload;
		},
	},
});

export const { reducer } = qtyComplaintsSlice;
export const { qtyComplaints } = qtyComplaintsSlice.actions;
