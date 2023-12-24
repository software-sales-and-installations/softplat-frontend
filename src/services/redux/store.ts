import {reducer as toggleBtnReducer} from '../../UI/ToggleButton/ToggleButtonSlice';
import {reducer as chooseRoleReducer} from '../../UI/ChooseRole/ChooseRoleSlice';
import {reducer as popupStateReducer} from '../../UI/Popup/PopupSlice';
import {reducer as signoutReducer} from '../../components/SignOutPopup/SignOutPopupSlice.tsx';
import {reducer as isSuccessCardDataReducer} from '../../components/PayPopup/PayPopupSlice.tsx';
import {reducer as isSuccessPayReducer} from '../../components/CartSummary/CartSummarySlice.tsx';
import {reducer as isNotSuccessPayReducer} from '../../components/CartSummary/CartSummarySlice.tsx';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsReducer from './slices/cards/cards';
import vendorsReducer from './slices/vendors/vendors'
import { useDispatch, useSelector } from 'react-redux';
import { userReducer } from './slices/user/user';
import type { TypedUseSelectorHook } from 'react-redux';
import { dropDownReducer } from '../../UI/DropDown/DropDownSlice';
import { sellerApi } from '../../utils/api/sellerApi.tsx';
import { adminApi } from '../../utils/api/adminApi.tsx';
import { authApi } from '../../utils/api/authApi.tsx';
import { buyerBasketApi } from '../../utils/api/buyerBasketApi.tsx';
import { buyerApi } from '../../utils/api/buyerApi.tsx';
import { buyerOrderApi } from '../../utils/api/buyerOrderApi.tsx';
import { categoryApi } from '../../utils/api/categoryApi.tsx';
import { imageApi } from '../../utils/api/imageApi.tsx';
import { publicCommentApi } from '../../utils/api/publicCommentApi.tsx';
import { publicProductApi } from '../../utils/api/publicProductApi.tsx';
import { userProductApi } from '../../utils/api/userProductApi.tsx';
import { submitImageApi } from '../../utils/api/submitImageApi.tsx';
import { vendorApi } from '../../utils/api/vendorApi.tsx';
import { cartReducer } from './slices/cart/cart';
import { favoriteReducer } from './slices/favourites/favourites.tsx';
import { complaintApi } from '../../utils/api/complaintApi.tsx';
import { userCommentApi } from '../../utils/api/userCommentApi.tsx';
import { purchasesReducer } from './slices/purchases/purchases.ts';
import { productReducer } from './slices/product/product.ts';

const reducers = combineReducers({
	user: userReducer,
	toggleBtn: toggleBtnReducer,
	chooseRole: chooseRoleReducer,
	popupOpen: popupStateReducer,
  isSuccessCardData: isSuccessCardDataReducer,
  isSuccessPay: isSuccessPayReducer,
  isNotSuccessPay: isNotSuccessPayReducer,
	dropdown: dropDownReducer,
  signout: signoutReducer,
	cards: cardsReducer,
	vendors: vendorsReducer,
	cart: cartReducer,
  favorite: favoriteReducer,
  purchases: purchasesReducer,
  purchase: purchasesReducer,
  product: productReducer,
	[adminApi.reducerPath]: adminApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [buyerBasketApi.reducerPath]: buyerBasketApi.reducer,
  [buyerApi.reducerPath]: buyerApi.reducer,
  [buyerOrderApi.reducerPath]: buyerOrderApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [complaintApi.reducerPath]: complaintApi.reducer,
  [imageApi.reducerPath]: imageApi.reducer,
  [publicCommentApi.reducerPath]: publicCommentApi.reducer,
  [publicProductApi.reducerPath]: publicProductApi.reducer,
  [sellerApi.reducerPath]: sellerApi.reducer,
  [userCommentApi.reducerPath]: userCommentApi.reducer,
  [userProductApi.reducerPath]: userProductApi.reducer,
  [submitImageApi.reducerPath]: submitImageApi.reducer,
  [vendorApi.reducerPath]: vendorApi.reducer,
});

export const store = configureStore({
	reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    adminApi.middleware,
    authApi.middleware,
    buyerBasketApi.middleware,
    buyerApi.middleware,
    buyerOrderApi.middleware,
    categoryApi.middleware,
    complaintApi.middleware,
    imageApi.middleware,
    publicCommentApi.middleware,
    publicProductApi.middleware,
    sellerApi.middleware,
    userCommentApi.middleware,
    userProductApi.middleware,
    submitImageApi.middleware,
    complaintApi.middleware,
    vendorApi.middleware,
    )
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
