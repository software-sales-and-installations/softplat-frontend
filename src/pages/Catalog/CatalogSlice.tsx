import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCards = createAsyncThunk('cards/fetchAllCards', async () => {
    const {data} = await axios.get('softplat.acceleratorpracticum.ru/product/search')
    return data
})

const initialState = {
    cards: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllCards.fulfilled]: (state, action) => {
            state.cards = action.payload;
        },
        [fetchAllCards.pending]: (state, action) => {},
        [fetchAllCards.rejected]: (state, action) => {},
    }
});

export default cardsSlice.reducer;
