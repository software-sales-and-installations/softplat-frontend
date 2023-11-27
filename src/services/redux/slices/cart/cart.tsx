import { createSlice } from '@reduxjs/toolkit';
import { IProductCard } from '../../../../components/ProductCard/ProductCardTypes';

interface ICartState {
  items: IProductCard[];
  itemsToRemove: IProductCard[];
}

const initialCartState: ICartState = {
  items: [],
  itemsToRemove: [],
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
    clearCart: state => {
      state.items = [];
    },
    updateCartItem: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    addToRemovalList: (state, action) => {
      state.itemsToRemove.push(action.payload);
    },
    removeFromRemovalList: (state, action) => {
      state.itemsToRemove = state.itemsToRemove.filter(
        item => item.id !== action.payload.id,
      );
    },
    clearRemovalList: state => {
      state.itemsToRemove = [];
    },
    removeSelectedItems: state => {
      state.items = state.items.filter(
        item =>
          !state.itemsToRemove.some(removeItem => removeItem.id === item.id),
      );
      state.itemsToRemove = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  updateCartItem,
  addToRemovalList,
  removeFromRemovalList,
  clearRemovalList,
  removeSelectedItems,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
