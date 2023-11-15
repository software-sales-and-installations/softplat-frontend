import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IToggleButton } from './ToggleButtonTypes';

const initialState = { value: false } as IToggleButton;

export const checkBoxStateSlice = createSlice({
	name: 'checkBoxState',
	initialState,
	reducers: {
		checkBoxState: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { reducer } = checkBoxStateSlice;
export const { checkBoxState } = checkBoxStateSlice.actions;
