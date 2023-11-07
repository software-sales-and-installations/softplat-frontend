import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginState } from './PopupForAuthTypes';

const initialState = { value: false } as ILoginState;

export const loginPopupSlice = createSlice({
	name: 'LoginPopup',
	initialState,
	reducers: {
		openLoginPopup: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { reducer } = loginPopupSlice;
export const { openLoginPopup } = loginPopupSlice.actions;
