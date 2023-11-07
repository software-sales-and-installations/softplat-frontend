import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRegisterState } from './PopupForAuthTypes';

const initialState = { value: false } as IRegisterState;

export const registerPopupSlice = createSlice({
	name: 'RegisterPopup',
	initialState,
	reducers: {
		openRegisterPopup: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { reducer } = registerPopupSlice;
export const { openRegisterPopup } = registerPopupSlice.actions;
