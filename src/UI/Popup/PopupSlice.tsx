import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPopup } from './PopupTypes';

const initialState = { setIsOpened: false } as IPopup;

export const popupStateSlice = createSlice({
	name: 'popupState',
	initialState,
	reducers: {
		popupState: (state, action: PayloadAction<boolean>) => {
			state.setIsOpened = action.payload;
		},
	},
});

export const { reducer } = popupStateSlice;
export const { popupState } = popupStateSlice.actions;
