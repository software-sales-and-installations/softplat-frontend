import React, { useEffect } from 'react';
import styles from './ProductCard.module.scss';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { IProductCardProps } from './ProductCardTypes';
import { useAppDispatch, useAppSelector } from '../../services/redux/store';
import { addItem, setCartItems } from '../../services/redux/slices/cart/cart';
import { useBuyerBasketAddItemMutation, useBuyerBasketInfoQuery } from '../../utils/api/buyerBasketApi';

const ProductCard: React.FC<IProductCardProps> = ({ card }) => {
  const addSpace = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const dispatch = useAppDispatch();
  const [buyerBasketAddItem] = useBuyerBasketAddItemMutation();
  //@ts-ignore
  const basketInfoQuery = useBuyerBasketInfoQuery();
  const cart = useAppSelector(store => store.cart.items);

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

      // dispatch(setCartItems(response.productsInBasket));

      console.log(response);
      
      basketInfoQuery.refetch();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };



  return (
    <div className={styles.card}>
      <Link to={`/product/${card.id}`} className={styles.card__link}>
        <div className={styles.card__img}>
          <img src={card.image?.url} alt="Изображение продукта" />
          <button
            className={styles.card__likeBtn}
            type="button"
            onClick={() => {}}
          >
            {card.isLiked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="#55505C"
              >
                <path
                  d="M6.29711 9.2141C3.7343 11.7769 3.7343 15.9321 6.29711 18.4949L17.5001 29.6978L28.7029 18.4949C31.2657 15.9321 31.2657 11.7769 28.7029 9.2141C26.1401 6.65129 21.9849 6.65129 19.4221 9.21411L17.5001 11.1363L15.5779 9.2141C13.0151 6.65129 8.85993 6.65129 6.29711 9.2141Z"
                  stroke="#55505C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M6.29711 9.2141C3.7343 11.7769 3.7343 15.9321 6.29711 18.4949L17.5001 29.6978L28.7029 18.4949C31.2657 15.9321 31.2657 11.7769 28.7029 9.2141C26.1401 6.65129 21.9849 6.65129 19.4221 9.21411L17.5001 11.1363L15.5779 9.2141C13.0151 6.65129 8.85993 6.65129 6.29711 9.2141Z"
                  stroke="#55505C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <p className={styles.card__name} title={card.name}>
          {card.name}
        </p>
        <div className={styles.card__priceContainer}>
          <p className={styles.card__price}>{addSpace(card.price)} ₽</p>
          <div className={styles.card__installPrice}>
            <span>с установкой </span>
            <span>{addSpace(card.price + card.installationPrice)} ₽</span>
            <span className={styles.card__tooltip}>
              <button className={styles.card__tooltipBtn}>
                <BsFillQuestionCircleFill size={12} />
              </button>
              <span className={styles.card__tooltipText}>
                Наш специалист установит ПО на ваше устройство в удобное время
              </span>
            </span>
          </div>
        </div>
      </Link>

        <Button mode="primary" onClick={handleAddToCart}>
          Добавить в корзину
        </Button>

    </div>
  );
};

export default ProductCard;
