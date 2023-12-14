import { FC, useEffect, useState } from 'react';
import style from './ProductPage.module.scss';
import { Button } from '../../UI/Button/Button';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { fetchSingleCard } from '../../services/redux/slices/cards/cards';
import {
  asyncAddToCart,
  asyncRemoveFromCart,
} from '../../services/redux/slices/cart/cart';
import {
  useBuyerBasketAddItemMutation,
  useBuyerBasketDeleteItemMutation,
  useBuyerBasketInfoQuery,
} from '../../utils/api/buyerBasketApi';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
  addToFavorites,
  ayncToggleFavorite,
  removeFromFavorites,
} from '../../services/redux/slices/favourites/favourites';
import {
  useBuyerAddFavoritesMutation,
  useBuyerDeleteFavoritesMutation,
  useBuyerFavoritesQuery,
} from '../../utils/api/buyerApi';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cardData = useAppSelector(state => state.cards.card);
  const [isInstallationSelected, setIsInstallationSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(cardData.price);
  const [tooltipText, setTooltipText] = useState('');
  const userId = localStorage.getItem('userId');
  const favorites = useAppSelector(state => state.favorite?.favorites);
  const isFavorite = favorites?.some(item => item === cardData.id);

  const buyerFavorites = useBuyerFavoritesQuery(undefined);
  const [buyerBasketDeleteItem, removeItemError] =
    useBuyerBasketDeleteItemMutation();
  const [addFavorites] = useBuyerAddFavoritesMutation();
  const [deleteFavorites] = useBuyerDeleteFavoritesMutation();
  const [buyerBasketAddItem, addItemError] = useBuyerBasketAddItemMutation();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();
  // const isItemInCart = cart.items.some(item => item.id === cardData.id);
  console.log(cardData.id);

  useEffect(() => {
    dispatch(fetchSingleCard(Number(id)));
  }, [id]);

  useEffect(() => {
    setTotalPrice(cardData.price);
  }, [cardData.price]);

  const cart = useAppSelector(store => store.cart?.items);

  const countItemInCart = cart.filter(
    item =>
      item.productResponseDto.id === cardData.id &&
      item.installation === isInstallationSelected,
  );

  const handleAddToCart = async () => {
    await asyncAddToCart(
      cardData,
      buyerBasketAddItem,
      basketInfoQuery.refetch,
      isInstallationSelected,
    );
  };

  const handleremoveFromCart = async () => {
    await asyncRemoveFromCart(
      cardData,
      buyerBasketDeleteItem,
      basketInfoQuery.refetch,
      isInstallationSelected,
    );
  };

  const handleCheckboxChange = () => {
    setIsInstallationSelected(prev => !prev);
    updateTotalPrice(isInstallationSelected);
  };

  const updateTotalPrice = (wasInstallationSelected: boolean) => {
    setTotalPrice(prev =>
      wasInstallationSelected
        ? prev - cardData.installationPrice
        : prev + cardData.installationPrice,
    );
  };

  const handleToggleFavorite = async () => {
    const action = isFavorite ? deleteFavorites : addFavorites;

    await ayncToggleFavorite(action, cardData.id, buyerFavorites.refetch);
    dispatch(
      isFavorite
        ? removeFromFavorites(cardData.id)
        : addToFavorites(cardData.id),
    );
  };

  // console.log(countItemInCart, 'countItemInCart');

  return (
    <>
      <div className={style.breadcrumbs}>
        <Breadcrumbs vendor={cardData.vendor!} />
      </div>
      <section className={style.product}>
        <div className={style.product__imageContainer}>
          <img
            src={cardData.image?.url}
            alt="Фотография товара"
            className={style.product__image}
          />
        </div>

        <div className={style.product__info}>
          <span className={style.product__category}>
            {cardData.category?.name}
          </span>

          <h2 className={style.product__name}>{cardData.name}</h2>
          <span className={style.product__vendor}>{cardData.vendor?.name}</span>
          <span className={style.product__number}>{cardData.id}</span>
          <div className={style.product__details}>
            <p className={style.product__price}>{totalPrice} ₽</p>
            <p className={style.product__seller}>Продавец</p>

            <button className={style.product__btn}>Скачать демо</button>
          </div>
          <p className={style.product__description}>{cardData.description}</p>
          <div className={style.product__checkboxContainer}>
            <Checkbox onCheck={handleCheckboxChange} />
            <span>{`Добавить установку ${cardData.installationPrice} ₽`}</span>
            <div
              className={style.product__question}
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

          <div className={style.product__buttons}>
            <div className={style.product__buyButtonBlock}>
              {countItemInCart.length > 0 ? (
                <div className={style.product__quantityButtons}>
                  <button
                    className={style.product__changeQuantity}
                    onClick={handleremoveFromCart}
                    disabled={removeItemError.isError}
                  >
                    -
                  </button>
                  <span>{countItemInCart[0].quantity}</span>
                  <button
                    className={style.product__changeQuantity}
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
                  Добавить в корзину
                </Button>
              )}
            </div>

            <button
              className={style.product__likeBtn}
              type="button"
              onClick={handleToggleFavorite}
            >
              {userId &&
                (isFavorite ? (
                  <FaHeart size={28} color={'#55505C'} />
                ) : (
                  <FaRegHeart size={28} strokeWidth={0.5} color={'#55505C'} />
                ))}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
