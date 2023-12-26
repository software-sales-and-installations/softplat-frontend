import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChooseRole } from './ChooseRoleTypes';

const initialState = { title: 'Я покупатель' } as IChooseRole;

export const ChooseRoleSlice = createSlice({
	name: 'chooseRole',
	initialState,
	reducers: {
		chooseRoleState: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
	},
});

export const { reducer } = ChooseRoleSlice;
export const { chooseRoleState } = ChooseRoleSlice.actions;
