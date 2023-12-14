import React, { useEffect } from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { IProductCardProps } from './ProductCardTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import {
  asyncAddToCart,
  asyncRemoveFromCart,
} from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import { FaRegHeart } from 'react-icons/fa';
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
import { FaHeart } from 'react-icons/fa6';
import toolsIcon from '../../images/tools-card-icon.svg';
import { selectUser } from '../../services/redux/slices/user/user';
import { RootState } from '../../services/redux/store';
import { useState } from 'react';

const ProductCard: React.FC<IProductCardProps> = ({ card }) => {
  const signout = useAppSelector((state: RootState) => state.signout.signout);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const user = useAppSelector(selectUser);
  const userId = localStorage.getItem('userId');
  // console.log('userId', userId);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'));
  }, [signout, user]);

  const addSpace = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();

  const buyerFavorites = useBuyerFavoritesQuery(undefined);
  const basketInfo = useBuyerBasketInfoQuery(undefined);

  const dispatch = useAppDispatch();
  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item === card.id);
  const [buyerBasketDeleteItem, removeItemError] =
    useBuyerBasketDeleteItemMutation();
  const cart = useAppSelector(store => store.cart?.items);

  const countItemInCart = cart.filter(
    item =>
      item.productResponseDto.id === card.id && item.installation === false,
  );
  // console.log(countItemInCart);

  const handleAddToCart = async () => {
    await asyncAddToCart(card, buyerBasketAddItem, basketInfo.refetch);
  };

  const handleremoveFromCart = async () => {
    await asyncRemoveFromCart(card, buyerBasketDeleteItem, basketInfo.refetch);
  };

  const handleToggleFavorite = async () => {
    const action = isFavorite ? deleteFavorites : addFavorites;

    await ayncToggleFavorite(action, card.id, buyerFavorites.refetch);
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
          <img src={card.image?.url} alt="Изображение продукта" />
        </div>
        <p className={styles.card__name} title={card.name}>
          {card.name}
        </p>
        <div className={styles.card__priceContainer}>
          <p className={styles.card__price}>{addSpace(card.price)} ₽</p>
          <div className={styles.card__installPrice}>
            <span className={styles.card__tooltip}>
              <button className={styles.card__tooltipBtn}>
                <img src={toolsIcon} alt="иконка инструментов" />
              </button>
              <span className={styles.card__tooltipText}>
                Наш специалист установит ПО на ваше устройство в удобное время
              </span>
            </span>
            <span>{addSpace(card.price + card.installationPrice)} ₽</span>
          </div>
        </div>
      </Link>

      {countItemInCart.length > 0 ? (
        <div className={styles.card__buttons}>
          <button
            className={styles.card__changeQuantity}
            onClick={handleremoveFromCart}
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
      ) : (
        <Button
          mode="primary"
          onClick={handleAddToCart}
          isDisabled={addItemError.isError}
        >
          {addItemError.isError ? 'Нет в наличии' : ' Добавить в корзину'}
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
