import {reducer as toggleBtnReducer} from '../../components/UI/ToggleButton/ToggleButtonSlice';
import {reducer as chooseRoleReducer} from '../../components/UI/ChooseRole/ChooseRoleSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
	toggleBtn: toggleBtnReducer,
	chooseRole: chooseRoleReducer
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
