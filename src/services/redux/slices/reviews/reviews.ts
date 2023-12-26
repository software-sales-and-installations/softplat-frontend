import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IReviewsState {
  isReview: boolean;
}

const initialReviewsState: IReviewsState = {
  isReview: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialReviewsState,
  reducers: {
    setIsReview: (state, action: PayloadAction<boolean>) => {
      state.isReview = action.payload;
    },
  },
});


export const { setIsReview } = reviewsSlice.actions;
export const reviewsReducer = reviewsSlice.reducer;
