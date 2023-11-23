import React from 'react';
import styles from './ProductCard.module.scss';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import { IProductCard } from './ProductCardTypes';

const ProductCard: React.FC<IProductCard> = ({
  name,
  price,
  installationPrice,
  image,
  isLiked,
  id
}) => {
  const addSpace = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={image?.url} alt="Изображение продукта" />
        <button
          className={styles.card__likeBtn}
          type="button"
          onClick={() => {}}
        >
          {isLiked ? (
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
      <Link
        to={`/product/${id}`}
        title={name}
        className={styles.card__name}
        // id={`${id}`}
      >
        {name}
      </Link>
      <div className={styles.card__priceContainer}>
        <p className={styles.card__price}>{addSpace(price)} ₽</p>
        <div className={styles.card__installPrice}>
          <span>с установкой </span>
          <span>{addSpace(price + installationPrice)} ₽</span>
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
      <Button mode="primary">Добавить в корзину</Button>
    </div>
  );
};

export default ProductCard;
