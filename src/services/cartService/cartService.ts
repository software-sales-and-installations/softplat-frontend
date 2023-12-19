import { useEffect } from 'react';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';
import { setCartItems } from '../redux/slices/cart/cart';
import { useAppDispatch } from '../redux/store';

export const useLoadCart = () => {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');
  const basketInfo = useBuyerBasketInfoQuery(undefined);
  const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');

  console.log('useLoadCart');

  useEffect(() => {
    if (userId) {
      if (basketInfo.currentData) {
        dispatch(setCartItems(basketInfo.currentData.productsInBasket));
        console.log('корзина');
      }
    } else {
      dispatch(setCartItems(cartItems));
    }
  }, [basketInfo, userId, dispatch]);
};
