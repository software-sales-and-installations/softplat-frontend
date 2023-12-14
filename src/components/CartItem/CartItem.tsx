import { FC, useEffect, useState } from 'react';

import style from './CartItem.module.scss';
import { Tooltip } from '../Tooltip/Tooltip';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

import { FaTrash, FaRegHeart, FaHeart } from 'react-icons/fa';
import { ICartItemProps } from './CartItemTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  addToUncheckedList,
  asyncAddToCart,
  asyncRemoveFromCart,
  removeFromUncheckedList,
  updateCartItem,
} from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  useBuyerBasketDeletePositionMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import { useNavigate } from 'react-router-dom';
import {
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
  useBuyerFavoritesQuery,
} from '../../utils/api/buyerApi';
import {
  addToFavorites,
  ayncToggleFavorite,
  removeFromFavorites,
} from '../../services/redux/slices/favourites/favourites';

export const CartItem: FC<ICartItemProps> = ({ item }) => {
  const product = item?.productResponseDto;
  const navigate = useNavigate();
  const [tooltipText, setTooltipText] = useState('');
  const [totalPrice, setTotalPrice] = useState(product?.price);
  const [quantity, setQuantity] = useState(item.quantity);
  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  const [buyerBasketDeleteItem, removeItemError] =
    useBuyerBasketDeleteItemMutation();
  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();

  const buyerFavorites = useBuyerFavoritesQuery(undefined);

  const basketInfo = useBuyerBasketInfoQuery(undefined);
  const [buyerBasketСlearPosition] = useBuyerBasketDeletePositionMutation();

  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('userId');

  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item === product.id);

  const isChecked = useAppSelector(
    state => state.cart.uncheckedItemIds.indexOf(item.id) === -1,
  );

  const handleToggleFavorite = async () => {
    const action = isFavorite ? deleteFavorites : addFavorites;
    await ayncToggleFavorite(action, product.id, buyerFavorites.refetch);
    dispatch(
      isFavorite ? removeFromFavorites(product.id) : addToFavorites(product.id),
    );
  };

  useEffect(() => {
    updateTotalPrice(item.installation, quantity);
    dispatch(
      updateCartItem({
        ...item,
      }),
    );
  }, [quantity, dispatch]);

  const updateTotalPrice = (
    wasInstallationSelected: boolean,
    updatedQuantity: number,
  ) => {
    const installationPrice = wasInstallationSelected
      ? product?.installationPrice
      : 0;
    setTotalPrice((product?.price + installationPrice) * updatedQuantity);
  };

  const handleBuyCheckboxChange = () => {
    if (!isChecked) {
      dispatch(removeFromUncheckedList(item.id));
    } else {
      dispatch(addToUncheckedList(item.id));
    }
  };

  const handleIncreaseQuantity = () => {
    if (
      quantity < 10 &&
      product.quantity !== undefined &&
      quantity < product.quantity
    ) {
      asyncAddToCart(product, buyerBasketAddItem, basketInfo.refetch);
      setQuantity(quantity + 1);
      updateTotalPrice(item.installation, quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    asyncRemoveFromCart(product, buyerBasketDeleteItem, basketInfo.refetch);
    setQuantity(quantity - 1);
    updateTotalPrice(item.installation, quantity - 1);
  };

  const handleRemoveItem = async () => {
    try {
      const response = await buyerBasketСlearPosition(item.id).unwrap();
      console.log('asdasdadddddddddddddddddddddddddddddddddd', response);

      basketInfo.refetch();
    } catch (error) {
      console.error('Ошибка удаления позиции:', error);
    }
  };

  const linkToPage = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <li className={style.cartItem}>
      <Checkbox onCheck={handleBuyCheckboxChange} checked={isChecked} />

      <img
        src={product?.image}
        alt="Фотография товара"
        className={style.cartItem__img}
        onClick={linkToPage}
      />
      <div className={style.cartItem__info}>
        <p className={style.cartItem__name} onClick={linkToPage}>
          {product?.name}
        </p>
        <div className={style.cartItem__parameters}>
          <span className={style.cartItem__type}>Лицензия</span>
          <Checkbox
            checked={item.installation}
            readOnly
          />
          <span className={style.cartItem__installationText}>{`c установкой ${product?.installationPrice}`}</span>
          <div
            className={style.cartItem__question}
            onMouseEnter={() =>
              setTooltipText(
                'Наш специалист установит ПО на ваше устройство в удобное время',
              )
            }
            onMouseLeave={() => setTooltipText('')}
          >
            ?
          </div>
          {tooltipText && <Tooltip text={tooltipText} />}
        </div>
        <div className={style.cartItem__buttons}>
          {userId && (
            <button
              className={style.cartItem__like}
              type="button"
              onClick={handleToggleFavorite}
            >
              {isFavorite ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
            </button>
          )}

          <FaTrash
            size={18}
            className={style.cartItem__trash}
            onClick={handleRemoveItem}
          />
        </div>
      </div>
      <span className={style.cartItem__price}>{totalPrice} ₽</span>
      <div className={style.cartItem__quantity}>
        <button
          onClick={handleDecreaseQuantity}
          className={style.cartItem__decreaseQuantity}
          disabled={removeItemError.isError}
        >
    
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className={style.cartItem__increaseQuantity}
          disabled={
            addItemError.isError ||
            quantity > 9 ||
            quantity === product.quantity
          }
        >

        </button>
      </div>
    </li>
  );
};
