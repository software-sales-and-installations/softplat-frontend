import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '../../../../components/ProductListCart/ProductListTypes';
import { IProductCard } from '../../../../components/ProductCard/ProductCardTypes';
import { AppDispatch } from '../../store';

export const addToLocalStorage = (
  product: IProductCard,
  dispatch: AppDispatch,
  installation: boolean = false,
) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');

  const newId = Date.now() + Math.random();

  const existingItem = cartItems.find(
    (item: ICartItem) =>
      item.productResponseDto.id === product.id &&
      item.installation === installation,
  );

  if (existingItem) {
    existingItem.quantity += 1;
    dispatch(updateCartItem(existingItem));
  } else {
    const newItem = {
      id: newId,
      productResponseDto: product,
      quantity: 1,
      installation,
    };
    cartItems.push(newItem);
    dispatch(addItem(newItem));
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromLocalStorage = (
  productId: number,
  dispatch: AppDispatch,
  installation: boolean = false,
) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');

  const existingItem = cartItems.find(
    (item: ICartItem) =>
      item.productResponseDto.id === productId &&
      item.installation === installation,
  );

  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      dispatch(updateCartItem(existingItem));
    } else {
      const existingItemIndex = cartItems.findIndex(
        (item: ICartItem) => item.productResponseDto.id === productId,
      );
      if (existingItemIndex !== -1) {
        cartItems.splice(existingItemIndex, 1);
        dispatch(removeItemById(productId));
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
};

export const sendCartToServer = async (
  cartItems: { installation: boolean; productId: number; quantity: number }[],
  buyerBasketSaveCart: Function,
  dispatch: AppDispatch,
) => {
  try {
    const basketCreateDto = {
      productsInBasket: cartItems,
    };

    const response = await buyerBasketSaveCart(basketCreateDto).unwrap();
    dispatch(setCartItems(response.productsInBasket));
    console.log(response);
  } catch (error) {
    console.error('Ошибка слияния корзин:', error);
  }
};

export const asyncAddToCart = async (
  card: IProductCard,
  buyerBasketAddItem: Function,
  dispatch: AppDispatch,
  installation: boolean = false,
) => {
  try {
    const response = await buyerBasketAddItem({
      productId: card.id,
      installation,
    }).unwrap();
    console.log(response);
    dispatch(setCartItems(response.productsInBasket));
  } catch (error) {
    console.error('Ошибка добавления товара в корзину:', error);
  }
};

export const asyncRemoveFromCart = async (
  card: IProductCard,
  buyerBasketRemoveItem: Function,
  dispatch: AppDispatch,
  installation: boolean = false,
) => {
  try {
    const response = await buyerBasketRemoveItem({
      productId: card.id,
      installation,
    }).unwrap();
    // basketInfo();
    console.log(response);
    dispatch(setCartItems(response.productsInBasket));
  } catch (error) {
    console.error('Ошибка удаления товара из корзины:', error);
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
      state.items = state.items.filter(
        item => item.productResponseDto.id !== itemId,
      );
    },
    clearCart: state => {
      state.items = [];
      state.uncheckedItemIds = [];
    },
    updateCartItem: (state, action: PayloadAction<ICartItem>) => {
      const cartItem = action.payload;
      const index = state.items.findIndex(item => item.id === cartItem.id);

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
    removeCartPostion: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    addToUncheckedList: (state, action: PayloadAction<number>) => {
      state.uncheckedItemIds.push(action.payload);
    },

    removeFromUncheckedList: (state, action: PayloadAction<number>) => {
      state.uncheckedItemIds = state.uncheckedItemIds.filter(
        itemId => itemId !== action.payload,
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
  removeFromUncheckedList,
  removeCartPostion,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
