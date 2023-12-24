import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const ayncToggleFavorite = async (
  action: Function,
  cardId: number,
) => {
  try {
    await action(cardId);
  } catch (error) {
    console.error('Ошибка при изменении избранного:', error);
  }
};

interface IFavoriteState {
  favorites: number[];
}

const initialFavoriteState: IFavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialFavoriteState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = [...state.favorites, action.payload];
    },

    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(item => item !== action.payload);
    },

    setFavorites: (state, action: PayloadAction<number[]>) => {
      state.favorites = action.payload;
    },
    clearFavorites: state => {
      state.favorites = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
  clearFavorites,
} = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
