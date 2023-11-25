import { createSlice } from '@reduxjs/toolkit';
import { IProductCard } from '../../../../components/ProductCard/ProductCardTypes';



interface ICartState {
   items: IProductCard[];
}

const initialCartState: ICartState = {
    items: [],
  };


const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
