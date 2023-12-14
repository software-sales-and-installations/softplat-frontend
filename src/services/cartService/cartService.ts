import { useEffect } from 'react';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';
import { setCartItems } from '../redux/slices/cart/cart';
import { useAppDispatch } from '../redux/store';

export const useLoadCart = () => {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');
  const basketInfo = useBuyerBasketInfoQuery(undefined);

  useEffect(() => {
    if (basketInfo.currentData && userId) {
      dispatch(setCartItems(basketInfo.currentData.productsInBasket));

      console.log('корзина');
    }
  }, [basketInfo, dispatch]);
};
