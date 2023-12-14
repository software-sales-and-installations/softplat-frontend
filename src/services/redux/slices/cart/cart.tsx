import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '../../../../components/ProductListCart/ProductListTypes';
import { IProductCard } from '../../../../components/ProductCard/ProductCardTypes';







export const asyncAddToCart = async (card: IProductCard, buyerBasketAddItem: Function, basketInfo: Function) => {
  try {
    const response = await buyerBasketAddItem({
      productId: card.id,
      installation: false,
    }).unwrap();
    console.log(response);
    basketInfo();
  } catch (error) {
    console.error('Ошибка добавления товара в корзину:', error);
  }
};


export const asyncRemoveFromCart = async (card: IProductCard, buyerBasketRemoveItem: Function, basketInfo: Function) => {
  try {
    const response = await buyerBasketRemoveItem({
      productId: card.id,
      installation: false,
    }).unwrap();
    console.log(response);
    basketInfo();
  } catch (error) {
    console.error('Ошибка добавления товара в корзину:', error);
  }
};





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
