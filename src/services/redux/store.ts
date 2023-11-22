import {reducer as toggleBtnReducer} from '../../UI/ToggleButton/ToggleButtonSlice';
import {reducer as chooseRoleReducer} from '../../UI/ChooseRole/ChooseRoleSlice';
import {reducer as popupStateReducer} from '../../UI/Popup/PopupSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsSlice from '../../pages/Catalog/CatalogSlice'
import { useDispatch, useSelector } from 'react-redux';
import { userReducer } from './slices/user/user';
import type { TypedUseSelectorHook } from 'react-redux';

const reducers = combineReducers({
	user: userReducer,
	toggleBtn: toggleBtnReducer,
	chooseRole: chooseRoleReducer,
	popupOpen: popupStateReducer,
	cards: cardsSlice
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
