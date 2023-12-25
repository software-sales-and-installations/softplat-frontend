import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISellerTotalProducts{
    sellerDraftList: number;
        sellerPublishedList: number;
        sellerRejectedList: number;
        sellerShippedList: number;
        sellerComplaintList: number;
}

const initialState: ISellerTotalProducts = {

        sellerDraftList: 0,
        sellerPublishedList: 0,
        sellerRejectedList: 0,
        sellerShippedList: 0,
        sellerComplaintList: 0
    
};

export const sellerTotalProductsSlice = createSlice({
	name: 'sellerTotalProducts',
	initialState,
	reducers: {
		sellerDraftList: (state, action: PayloadAction<any>) => {
			state.sellerDraftList = action.payload;
		},
        sellerPublishedList: (state, action: PayloadAction<any>) => {
			state.sellerPublishedList = action.payload;
		},
        sellerRejectedList: (state, action: PayloadAction<any>) => {
			state.sellerRejectedList = action.payload;
		},
        sellerShippedList: (state, action: PayloadAction<any>) => {
			state.sellerShippedList = action.payload;
		},
        sellerComplaintList: (state, action: PayloadAction<any>) => {
			state.sellerComplaintList = action.payload;
		},
	},
});

export const { reducer } = sellerTotalProductsSlice;
export const { sellerDraftList, sellerPublishedList,sellerRejectedList,sellerShippedList, sellerComplaintList} = sellerTotalProductsSlice.actions;
