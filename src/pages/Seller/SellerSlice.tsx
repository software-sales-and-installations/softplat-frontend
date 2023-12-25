import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISellerTotalProducts{
    sellerTotalProducts: ISellerProducts
}
interface ISellerProducts{
        sellerDraftList: number;
        sellerPublishedList: number;
        sellerRejectedList: number;
        sellerShippedList: number;
        sellerComplaintList: number;
    
}
const initialState: ISellerTotalProducts = {
	sellerTotalProducts: {
        sellerDraftList: 0,
        sellerPublishedList: 0,
        sellerRejectedList: 0,
        sellerShippedList: 0,
        sellerComplaintList: 0
    }
};

export const sellerTotalProductsSlice = createSlice({
	name: 'sellerTotalProducts',
	initialState,
	reducers: {
		setSellerTotalProducts: (state, action: PayloadAction<any>) => {
			state.sellerTotalProducts = action.payload;
		},
	},
});

export const { reducer } = sellerTotalProductsSlice;
export const { setSellerTotalProducts } = sellerTotalProductsSlice.actions;
