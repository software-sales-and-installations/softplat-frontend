import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../services/api/apiConfig";

// export const fetchAllCards = createAsyncThunk('cards/fetchAllCards', async () => {
//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
//     return data
// })

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    const {data} = await axios.get(`${BASE_URL}/product/search`)
    return data
})

const initialState = {
    cards: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchCards.pending, (state, action) => {

        })
        .addCase(fetchCards.fulfilled, (state, action) => {
            state.cards = action.payload
        })
        .addCase(fetchCards.rejected, (state, action) => {})
    }
});

export default cardsSlice.reducer;
