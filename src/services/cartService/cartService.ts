import { useEffect } from 'react';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';
import { setCartItems } from '../redux/slices/cart/cart';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { ICartItem } from '../../components/ProductListCart/ProductListTypes';

export const useLoadCart = () => {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('role');

  const userStoreId = useAppSelector(store => store.user.user.id);

  const basketInfo = useBuyerBasketInfoQuery(undefined, {
    skip: (!userId && !userStoreId) || userRole !== 'BUYER',
  });

  useEffect(() => {
    if (basketInfo.data) {
      basketInfo.refetch();
    }
  }, [userStoreId, basketInfo.data]);

  const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');

  useEffect(() => {
    if (userId) {
      if (basketInfo.currentData) {
        dispatch(setCartItems(basketInfo.currentData.productsInBasket));
      }
    } else {
      dispatch(setCartItems(cartItems));
    }
  }, [basketInfo, userId, dispatch]);
};

export const convertCartItemsToRequest = (): {
  installation: boolean;
  productId: number;
  quantity: number;
}[] => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');

  let cartRequest: {
    installation: boolean;
    productId: number;
    quantity: number;
  }[] = [];

  cartItems.forEach((card: ICartItem) => {
    cartRequest.push({
      installation: card.installation,
      productId: card.productResponseDto.id,
      quantity: card.quantity,
    });
  });
  return cartRequest;
};
