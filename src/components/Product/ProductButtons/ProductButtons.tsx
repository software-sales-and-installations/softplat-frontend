import { useEffect, useState } from 'react';

import { Button } from '../../../UIStorybook/Button/Button.tsx';
import { Icons } from '../../../UIStorybook/Icons/Icons.tsx';

import styles from './ProductButtons.module.scss'
import { Checkbox } from '../../../UIStorybook/Checkbox/Checkbox.tsx';
import { RootState, useAppDispatch, useAppSelector } from '../../../services/redux/store.ts';
import { selectUser } from '../../../services/redux/slices/user/user.ts';

import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  // useBuyerBasketInfoQuery,
} from '../../../utils/api/buyerBasketApi';
import {
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
  useBuyerFavoritesQuery,
} from '../../../utils/api/buyerApi.tsx';
import {
  addToFavorites,
  ayncToggleFavorite,
  removeFromFavorites,
} from '../../../services/redux/slices/favourites/favourites.tsx';
// import {
//   addToFavorites,
//   // ayncToggleFavorite,
//   removeFromFavorites,
// } from '../../services/redux/slices/favourites/favourites';
// import { usePublicProductQuery } from '../../../utils/api/publicProductApi.tsx';

interface IProductButtons {
  error: boolean;
  id: string | undefined;
  instPrice: number | undefined;
}
const ProductButtons = ({error, id, instPrice}: IProductButtons) => {
  // const cardData = useAppSelector(state => state.cards.card);
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  // const [isLiked, setIsLiked] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(cardData.price);
  const user = useAppSelector(selectUser);
  // const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  const cart = useAppSelector(store => store.cart?.items);
  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item.toString() === id);
  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();
  const dispatch = useAppDispatch();
  const countItemInCart = cart.filter(
    item =>
      item.productResponseDto.id.toString() === id && !item.installation,
  );
  const buyerFavorites = useBuyerFavoritesQuery(undefined);
  const handleToggleFavorite = async () => {
    const action = isFavorite ? deleteFavorites : addFavorites;

    await ayncToggleFavorite(action, Number(id), buyerFavorites.refetch);
    dispatch(
      isFavorite ? removeFromFavorites(Number(id)) : addToFavorites(Number(id)),
    );
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));
    setRole(localStorage.getItem('role'));
  }, [signout, user]);

  // const handleLike = () => {
  //   setIsLiked(!isLiked)
  // }

  const handleCheckboxChange = () => {
    console.log('checkbox test')
    setIsInstallationSelected(prev => !prev);
    // updateTotalPrice(isInstallationSelected);
  };

  // const updateTotalPrice = (wasInstallationSelected: boolean) => {
    // setTotalPrice(prev =>
    //   wasInstallationSelected
    //     ? prev - cardData.installationPrice
    //     : prev + cardData.installationPrice,
    // );
  // };

  // const handleAddToCart = async () => {
  //   try {
  //     const response = await buyerBasketAddItem({
  //       productId: cardData.id,
  //       installation: isInstallationSelected,
  //     }).unwrap();
  //
  //     dispatch(setCartItems(response.productsInBasket));
  //
  //     basketInfoQuery.refetch();
  //   } catch (error) {
  //     console.error('Error adding item to cart:', error);
  //   }
  // };

  const [buyerBasketAdd, { isError: addItemError }] = useBuyerBasketAddItemMutation();
  const handleAddToCart = () => {
    buyerBasketAdd({productId: id, installation: isInstallationSelected}).unwrap()
      .then((res: any) => {
        console.log(res)
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally()
  };

    const [buyerBasketDelete, { isError: removeItemError }] = useBuyerBasketDeleteItemMutation();
  const handleremoveFromCart = () => {
    buyerBasketDelete({productId: id, installation: isInstallationSelected}).unwrap()
      .then((res: any) => {
        console.log(res)
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally()
  };


  return (
<>
      <div className={styles.productInfo__installation}>
          <Checkbox onCheck={handleCheckboxChange} extClassName={styles.productInfo__checkbox} label={`Добавить установку ${instPrice} ₽`} />
        </div>
  {(role==='BUYER' || !token) ?
    <div className={styles.productInfo__buttons}>
      {countItemInCart.length > 0 ? (
        <div className={styles.productInfo__buttons}>
          <button
            className={styles.productInfo__changeQuantity}
            onClick={handleremoveFromCart}
            disabled={removeItemError}
          >
            -
          </button>
          <span>{countItemInCart[0].quantity}</span>
          <button
            className={styles.productInfo__changeQuantity}
            onClick={handleAddToCart}
            disabled={
              addItemError ||
              countItemInCart[0].quantity ===
              countItemInCart[0].productResponseDto.quantity ||
              countItemInCart[0].quantity > 9
            }
          >
            +
          </button>
        </div>
      ) : (
        ((role==='BUYER' || !token)?
          <div className={styles.productInfo__addBtn}>
            <Button
              buttonType="primary"
              width='255px'
              height='55px'
              onClick={handleAddToCart}
              disabled={addItemError}
            >
              Добавить в корзину
            </Button>
          </div>
          : null)
      )}
          <Button buttonType='link' onClick={handleToggleFavorite} disabled={error}>{isFavorite ? <Icons type='filledLike' size={35}/> :
            <Icons type='emptyLike' size={35}/>}</Button>
      </div>
  : null}
  </>
  );
};

export default ProductButtons;
