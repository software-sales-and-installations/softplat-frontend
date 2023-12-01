import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '../../../../components/ProductListCart/ProductListTypes';



interface ICartState {
  items: ICartItem[];
  uncheckedItemIds: number[];
}

const initialCartState: ICartState = {
  items: [],
  uncheckedItemIds: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setCartItems: (state, action: PayloadAction<ICartItem[]>) => {
      state.items = action.payload;
      // state.uncheckedItemIds = [];
    },
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
    },
    removeItemById: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.productResponseDto.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
      state.uncheckedItemIds = [];
    },
    updateCartItem: (state, action: PayloadAction<ICartItem>) => {
      // console.log('upd');
      const cartItem = action.payload;
      const index = state.items.findIndex((item) => item.id === cartItem.id);

      if (index !== -1) {
        const updatedItems = [...state.items];
        updatedItems[index] = {
          ...updatedItems[index],
          quantity:
            cartItem.quantity !== undefined
              ? cartItem.quantity
              : updatedItems[index].quantity,
        };

        state.items = updatedItems;
      }
    },
    addToUncheckedList: (state, action: PayloadAction<number>) => {
      state.uncheckedItemIds.push(action.payload);
    },

    removeFromUncheckedList: (state, action: PayloadAction<number>) => {
      state.uncheckedItemIds = state.uncheckedItemIds.filter(
        (itemId) => itemId !== action.payload
      );
    },
  },
});

export const {
  setCartItems,
  addItem,
  clearCart,
  updateCartItem,
  removeItemById,
  addToUncheckedList,
  removeFromUncheckedList
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
