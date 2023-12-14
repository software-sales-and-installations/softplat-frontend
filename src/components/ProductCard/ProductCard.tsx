import React, { useEffect } from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { IProductCardProps } from './ProductCardTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { setCartItems } from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import { FaLowVision, FaRegHeart } from 'react-icons/fa';
import {
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
  useBuyerFavoritesQuery,
} from '../../utils/api/buyerApi';
import {
  addToFavorites,
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
  const [role, setRole] = useState(localStorage.getItem('role'))
  const user = useAppSelector(selectUser);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setRole(localStorage.getItem('role'))
  }, [signout, user]);
  const addSpace = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();
  //@ts-ignore
  const buyerFavorites = useBuyerFavoritesQuery();
  const dispatch = useAppDispatch();
  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();
  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item === card.id);

  useEffect(() => {
    if (basketInfoQuery.data) {
      dispatch(setCartItems(basketInfoQuery.data.productsInBasket));
    }
  }, [basketInfoQuery.data, dispatch]);

  const handleAddToCart = async () => {
    try {
      const response = await buyerBasketAddItem({
        productId: card.id,
        installation: false,
      }).unwrap();
      console.log(response);
      basketInfoQuery.refetch();
    } catch (error) {
      console.error('Ошибка добавления товара в корзину:', error);
    }
  };

  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await deleteFavorites(card.id);
        dispatch(removeFromFavorites(card.id));
      } else {
        await addFavorites(card.id);
        dispatch(addToFavorites(card.id));
      }
      await buyerFavorites.refetch();
    } catch (error) {
      console.error('Ошибка при изменении избранного:', error);
    }
  };

  return (
    <div className={styles.card}>
      {(token&&role==='BUYER')?
      <button
        className={styles.card__likeBtn}
        type="button"
        onClick={handleToggleFavorite}
      >
        {isFavorite ? <FaHeart size={28} /> : <FaRegHeart size={28} strokeWidth={0.5} />}
      </button>: null}
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

      <Button mode="primary" onClick={handleAddToCart} isDisabled={addItemError.isError}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductCard;
