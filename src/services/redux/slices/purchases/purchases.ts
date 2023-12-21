import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPurchasesState {
  purchases: number[];
}

const initialPurchasesState: IPurchasesState = {
  purchases: [],
};

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: initialPurchasesState,
  reducers: {
    addToPurchases: (state, action: PayloadAction<number>) => {
      state.purchases = [...state.purchases, action.payload];
    },

    removeFromPurchases: (state, action: PayloadAction<number>) => {
      state.purchases = state.purchases.filter(item => item !== action.payload);
    },

    setPurchases: (state, action: PayloadAction<number[]>) => {
      state.purchases = action.payload;
    },
    clearPurchases: (state) => {
        state.purchases = [];
      },

  },
});


export const selectPurchases = (state: { purchase: any }) => state.purchase.purchases;
export const { addToPurchases, removeFromPurchases, setPurchases, clearPurchases } = purchasesSlice.actions;
export const purchasesReducer = purchasesSlice.reducer;
