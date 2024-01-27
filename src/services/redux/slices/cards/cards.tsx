import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../../../utils/constants';
import { IProductCard } from '../../../../components/ProductCard/ProductCardTypes';

interface ICard {
  products: IProductCard[];
}
interface ICardsState {
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: unknown;
  cards: ICard;
  card: IProductCard;
}

export const fetchAllCards = createAsyncThunk<ICard, undefined>(
  'cards/fetchAllCards',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/product/search`);
      return fulfillWithValue(data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const fetchSortedCards = createAsyncThunk(
  'cards/fetchCards',
  async (params: string = 'NEWEST', { rejectWithValue, fulfillWithValue }) => {
    const sort = `sort=${params}`;

    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/product/search/?${sort}`,
      );
      return fulfillWithValue(data);
    } catch (error: unknown) {
      rejectWithValue(error);
    }
  },
);

export const fetchSingleCard = createAsyncThunk(
  'cards/fetchSingleCard',
  async (id: number, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/product/${id}`);
      return fulfillWithValue(data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const initialState: ICardsState = {
  status: 'idle',
  error: null,
  cards: { products: [] },
  card: {
    id: 0,
    name: '',
    price: 0,
    installationPrice: 0,
    image: { url: '' },
    quantity: 0,
    hasDemo: false,
    rating: null,
  },
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSortedCards.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSortedCards.fulfilled, (state, action) => {
        state.status = 'success';
        state.cards = action.payload;
      })
      .addCase(fetchSortedCards.rejected, state => {
        state.status = 'failed';
      })
      .addCase(fetchSingleCard.fulfilled, (state, action) => {
        state.card = action.payload;
      })
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      });
  },
});


export default cardsSlice.reducer;
