import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TRange = {
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    key?: string | undefined;
 }

const initialState = { 

    startDate: undefined,
    endDate: undefined,
    key: undefined
    
 } as TRange;

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		startDate: (state, action: PayloadAction<any>) => {
			state.startDate = action.payload;
		},
        endDate: (state, action: PayloadAction<any>) => {
			state.endDate = action.payload;
		},
	},
});

export const { reducer } = calendarSlice;
export const { startDate, endDate} = calendarSlice.actions;
