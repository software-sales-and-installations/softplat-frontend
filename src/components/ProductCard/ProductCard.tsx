import React, { useEffect } from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../UIStorybook/Button/Button';
import { IProductCardProps } from './ProductCardTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  addToLocalStorage,
  asyncAddToCart,
  asyncRemoveFromCart,
  removeFromLocalStorage,
} from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
} from '../../utils/api/buyerBasketApi';
import { FaRegHeart } from 'react-icons/fa';
import {
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
} from '../../utils/api/buyerApi';
import {
  addToFavorites,
  ayncToggleFavorite,
  removeFromFavorites,
} from '../../services/redux/slices/favourites/favourites';
import { FaHeart } from 'react-icons/fa6';
import toolsIcon from '../../images/tools-icon.svg';
import { selectUser } from '../../services/redux/slices/user/user';
import { RootState } from '../../services/redux/store';
import { useState } from 'react';

const ProductCard: React.FC<IProductCardProps> = ({ card }) => {
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const user = useAppSelector(selectUser);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));
  }, [signout, user]);

  const addSpace = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  const cardPrice = `${addSpace(card.price)} ₽`;
  const installationPrice = `${addSpace(
    card.price + card.installationPrice,
  )} ₽`;

  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();
  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  const [buyerBasketDeleteItem, removeItemError] =
    useBuyerBasketDeleteItemMutation();

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item === card.id);

  const cart = useAppSelector(store => store.cart?.items);

  const countItemInCart = cart.filter(
    item =>
      item.productResponseDto.id === card.id && item.installation === false,
  );

  const handleAddToCart = async () => {
    if (userId) {
      await asyncAddToCart(card, buyerBasketAddItem, dispatch);
    } else {
      addToLocalStorage(card, dispatch);
    }
  };

  const handleRemoveFromCart = async () => {
    if (userId) {
      await asyncRemoveFromCart(card, buyerBasketDeleteItem, dispatch);
    } else {
      removeFromLocalStorage(card.id, dispatch);
    }
  };

  const handleToggleFavorite = async () => {
    const action = isFavorite ? deleteFavorites : addFavorites;

    await ayncToggleFavorite(action, card.id);
    dispatch(
      isFavorite ? removeFromFavorites(card.id) : addToFavorites(card.id),
    );
  };

  return (
    <div className={styles.card}>
      {token && role === 'BUYER' ? (
        <button
          className={styles.card__likeBtn}
          type="button"
          onClick={handleToggleFavorite}
        >
          {userId &&
            (isFavorite ? (
              <FaHeart size={28} />
            ) : (
              <FaRegHeart size={28} strokeWidth={0.5} />
            ))}
        </button>
      ) : null}
      <Link to={`/product/${card.id}`} className={styles.card__link}>
        <div className={styles.card__img}>

          {card?.image?.id &&  <img src={`https://api.softplat.ru/image/${card?.image?.id}`} alt="Изображение продукта" />}
        </div>
        <p className={styles.card__name} title={card.name}>
          {card.name}
        </p>
        <div className={styles.card__priceContainer}>
          <p className={styles.card__price} title={cardPrice}>
            {cardPrice}
          </p>
          <div>•</div>
          <div className={styles.card__installPrice}>
            <span title={installationPrice}>{installationPrice}</span>
            <span className={styles.card__tooltip}>
              <button className={styles.card__tooltipBtn}>
                <img src={toolsIcon} alt="иконка инструментов" />
              </button>
              <span className={styles.card__tooltipText}>
                Наш специалист установит ПО на ваше устройство в удобное время
              </span>
            </span>
          </div>
        </div>
      </Link>
      {countItemInCart.length > 0 ? (
        <div className={styles.card__buttons}>
          <button
            className={styles.card__changeQuantity}
            onClick={handleRemoveFromCart}
            disabled={removeItemError.isError}
          >
            -
          </button>
          <span>{countItemInCart[0].quantity}</span>
          <button
            className={styles.card__changeQuantity}
            onClick={handleAddToCart}
            disabled={
              addItemError.isError ||
              countItemInCart[0].quantity ===
                countItemInCart[0].productResponseDto.quantity ||
              countItemInCart[0].quantity > 9
            }
          >
            +
          </button>
        </div>
      ) : role === 'BUYER' || !token ? (
        <div className={styles.card__addBtn}>
          <Button
            buttonType="primary"
            width="100%"
            height="35px"
            onClick={handleAddToCart}
            disabled={addItemError.isError}
          >
            {addItemError.isError ? 'Нет в наличии' : ' Добавить в корзину'}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
