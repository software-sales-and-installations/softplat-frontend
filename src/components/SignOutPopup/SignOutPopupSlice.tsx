import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISignOut{
    signout: boolean;
}

const initialState = { signout: false } as ISignOut;

export const signoutSlice = createSlice({
	name: 'signout',
	initialState,
	reducers: {
		signout: (state, action: PayloadAction<boolean>) => {
			state.signout = action.payload;
		},
	},
});

export const { reducer } = signoutSlice;
export const { signout} = signoutSlice.actions;
