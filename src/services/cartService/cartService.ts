import { useEffect } from 'react';
import { useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';
import { clearCart, setCartItems } from '../redux/slices/cart/cart';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { ICartItem } from '../../components/ProductListCart/ProductListTypes';
import { popupState } from '../../UI/Popup/PopupSlice.tsx';
import { signOut } from '../redux/slices/user/user.ts';
import { clearFavorites } from '../redux/slices/favourites/favourites.tsx';
import { signout } from '../../components/SignOutPopup/SignOutPopupSlice.tsx';
import { useNavigate } from 'react-router-dom';
import { useAuthLogoutMutation } from '../../utils/api/authApi.tsx';

export const useLoadCart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('role');

  const userStoreId = useAppSelector(store => store.user.user.id);

  const basketInfo = useBuyerBasketInfoQuery(undefined, {
    skip: (!userId && !userStoreId) || userRole !== 'BUYER',
  });

  const { error: basketError } = useBuyerBasketInfoQuery(undefined, {
    skip: (!userId && !userStoreId) || userRole !== 'BUYER',
  });

  const [authLogout] = useAuthLogoutMutation();

  const handleSubmitLogout = () => {
    // @ts-ignore
    authLogout()
      .unwrap()
      .then(() => {
        dispatch(popupState(false));
        dispatch(signOut());

        dispatch(clearFavorites());
        dispatch(clearCart());
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        localStorage.clear();
        navigate('/', { replace: true });
        dispatch(signout(true));
      });
  };

  // @ts-ignore
  if (basketError?.originalStatus === 401 && userRole === 'BUYER') {
    handleSubmitLogout();
  }

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
