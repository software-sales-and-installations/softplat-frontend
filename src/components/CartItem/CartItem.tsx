import { FC, useEffect, useState } from 'react';

import style from './CartItem.module.scss';
import { Tooltip } from '../Tooltip/Tooltip';
import { Checkbox } from '../../UI/Checkbox/Checkbox';

import { FaTrash, FaRegHeart, FaPlus, FaMinus, FaHeart } from 'react-icons/fa';
import { ICartItemProps } from './CartItemTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  addToUncheckedList,
  removeFromUncheckedList,
  removeItemById,
  updateCartItem,
} from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
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
  //@ts-ignore
  const buyerFavorites = useBuyerFavoritesQuery();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();

  const dispatch = useAppDispatch();

  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item === product.id);

  const isChecked = useAppSelector(
    state => state.cart.uncheckedItemIds.indexOf(item.id) === -1,
  );

  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await deleteFavorites(product.id);
        dispatch(removeFromFavorites(product.id));
      } else {
        await addFavorites(product.id);
        dispatch(addToFavorites(product.id));
      }
      await buyerFavorites.refetch();
    } catch (error) {
      console.error('Ошибка при изменении избранного:', error);
    }
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

  const handleIncreaseQuantity = async () => {
    if (quantity < 10) {
      try {
        const response = await buyerBasketAddItem({
          productId: product.id,
          installation: item.installation,
        }).unwrap();

        console.log('Response:', response);

        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);
        updateTotalPrice(item.installation, updatedQuantity);

        basketInfoQuery.refetch();
      } catch (error) {
        console.error('Ошибка добавления товара в корзину:', error);
      }
    }
  };

  const handleDecreaseQuantity = async () => {
    if (quantity > 1) {
      try {
        const response = await buyerBasketDeleteItem({
          productId: product.id,
          installation: item.installation,
        }).unwrap();
        console.log('Response:', response);

        const updatedQuantity = quantity - 1;
        setQuantity(updatedQuantity);
        updateTotalPrice(item.installation, updatedQuantity);

        basketInfoQuery.refetch();
      } catch (error) {
        console.error('Ошибка добавления товара в корзину:', error);
      }
    }
  };

  const handleRemoveItem = async () => {
    if (quantity === 1) {
      // Api логика удаления всей позиции, ( пока логика удаления одной копии)
      try{
        const response = await buyerBasketDeleteItem({
          productId: product.id,
          installation: item.installation,
        }).unwrap();
        console.log('Response:', response);

        dispatch(removeItemById(product.id));
        dispatch(removeFromUncheckedList(item.id))
        basketInfoQuery.refetch();

      }catch (error) {
        console.error('Ошибка удаления из корзинЫ:', error);
      }
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
            label={`c установкой ${product?.installationPrice}`}
            checked={item.installation}
            readOnly
          />
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
          <button
            className={style.cartItem__like}
            type="button"
            onClick={handleToggleFavorite}
          >
            {isFavorite ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
          </button>

          <FaTrash
            size={25}
            className={style.cartItem__trash}
            onClick={handleRemoveItem}
          />
        </div>
      </div>
      <span className={style.cartItem__price}>{totalPrice} ₽</span>
      <div className={style.cartItem__quantity}>
        <button
          onClick={handleDecreaseQuantity}
          className={style.cartItem__quantityButton}
          disabled={removeItemError.isError || quantity === 1}
        >
          <FaMinus size={15} />
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className={style.cartItem__quantityButton}
          disabled={addItemError.isError || quantity > 9}
        >
          <FaPlus size={15} />
        </button>
      </div>
    </li>
  );
};
