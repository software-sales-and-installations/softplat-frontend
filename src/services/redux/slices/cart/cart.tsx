import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductCard } from '../../../../components/ProductCard/ProductCardTypes';
import { buyerBasketApi } from '../../../../utils/api/buyerBasketApi';
import { ICartItem } from '../../../../components/ProductListCart/ProductListTypes';



interface ICartState {
  items: ICartItem[];
}

const initialCartState: ICartState = {
  items: [],
};





const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setCartItems: (state, action: PayloadAction<ICartItem[]>) => {
      const newItems = action.payload.map(item => ({ ...item, isChecked: true }));
      state.items = newItems;
    },
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
    },
    removeItemById: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      state.items = state.items.filter((item) => item.productResponseDto.id !== itemId);
      // state.itemsToBuy = state.itemsToBuy.filter((item) => item.productResponseDto.id !== itemId);
    },

    clearCart: (state) => {
      state.items = [];
    },
    updateCartItem: (state, action: PayloadAction<ICartItem>) => {
      const cartItem = action.payload;
      const index = state.items.findIndex((item) => 
        item.productResponseDto.id === cartItem.productResponseDto.id
      );
    
      if (index !== -1) {
        // Создаем новый массив, чтобы не изменять оригинальный
        const updatedItems = [...state.items];
    
        // Обновляем поля quantity и isChecked
        updatedItems[index] = { 
          ...updatedItems[index], 
          quantity: cartItem.quantity !== undefined ? cartItem.quantity : updatedItems[index].quantity,
          isChecked: cartItem.isChecked !== undefined ? cartItem.isChecked : updatedItems[index].isChecked,
        };
    
        // Присваиваем обновленный массив items
        state.items = updatedItems;
      }
    },
    addToBuyList: (state, action: PayloadAction<ICartItem>) => {
      const itemToBuy = action.payload;
      const index = state.items.findIndex(item => item.id === itemToBuy.id);
    
      if (index !== -1) {
        state.items[index].isChecked = !state.items[index].isChecked;
      }
    },
    removeFromBuyList: (state, action: PayloadAction<ICartItem>) => {
      state.itemsToBuy = state.itemsToBuy.filter((item) => item.productResponseDto.id !== action.payload.id);
    },
    // clearRemovalList: (state) => {
    //   state.itemsToBuy = [];
    // },
    // removeSelectedItems: (state) => {
    //   state.items = state.items.filter(
    //     (item) => !state.itemsToBuy.some((removeItem) => removeItem.id === item.id)
    //   );
    //   state.itemsToBuy = [];
    // },
  },
});

export const {
  setCartItems,
  addItem,
  clearCart,
  updateCartItem,
  addToBuyList,
  removeFromBuyList,
  // clearRemovalList,
  // removeSelectedItems,
  removeItemById,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
